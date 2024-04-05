import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form } from "../Forms";

export const Language = () => {
    const [state, setState] = useAppState();
    const { handleSubmit, register } = useForm({defaultValues: state});
    const navigate = useNavigate();

    const saveData = (data) => {
        setState({...state, ...data});
        navigate('/confirm');
    }

    return(
        <Form onSubmit={handleSubmit(saveData)}>
            <fieldset>
                <Field label="Preferred Language">
                <select
                    {...register("language")}
                    id="language"
                    className="form-control"
                >
                    <option value="english">Engish</option>
                    <option value="tamil">Tamil</option>
                </select>
                </Field>
                <div className="button-row">
                    <Link className={`btn btn-secondary`} to="/whatsapp">
                        {"<"} Previous
                    </Link>
                    <Button>Next {">"}</Button>
                </div>
            </fieldset>
        </Form>
    )
}

