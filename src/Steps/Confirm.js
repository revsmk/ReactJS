import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { Button, Form, Section, SectionRow } from "../Forms";
 
export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });
 
  const submitData = (data) => {
    console.info(data);
    // Submit data to the server
  };
 
  return (
    <Form onSubmit={handleSubmit(submitData)}>
        <h1 className="mb-4">Confirm</h1>
        <Section title="Email" url="/email">
            <SectionRow>
                <div>{state.email}</div>
            </SectionRow>
        </Section>
        <Section title="Contact Number" url="/mobile">
            <SectionRow>
                <div>{state.mobile}</div>
            </SectionRow>
        </Section>
        <Section title="Whats App Number" url="/whatsapp">
            <SectionRow>
                <div>{state.whatsapp}</div>
            </SectionRow>  
        </Section>   
        <Section title="Preferred Language" url="/language">    
            <SectionRow>
                <div>{state.language}</div>
            </SectionRow>            
        </Section>       
        <div className="d-flex justify-content-start">
            <Button>Submit</Button>
        </div>
    </Form>
  );
};