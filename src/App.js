import Form from 'react-bootstrap/Form';
import './index.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function FormGroupExample() {
  const newLocal = <br></br>;
  return (
  <Form>    
  <Form.Group className="matricula-mb-3" controlId="formGroupEmail">
  
    <Form.Label>Matrícula/CPF:</Form.Label>
      {newLocal}
      <Form.Control className='control' type="email" placeholder="Digite aqui sua matrícula ou CPF" />
      {newLocal}
      <Form.Text className="text-muted">
        Sua Matrícula ou CPF não irão ser compartilhados. 
      </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label className='senha-mb-3'>Senha:</Form.Label>
    <Form.Control className='control' type="password" placeholder="Digite aqui sua senha"></Form.Control>
    <Form.Check type="checkbox" className="checkbox-p" label="Lembrar senha" />
  </Form.Group>
      <Button as="input" className='submit-b' type="submit" value="Login" />{' '}
      <Button className='forgot-b' href="#" variant="secondary">
        Esqueci minha senha
      </Button>
    <Card className='blue-card'>
    </Card>

    </Form>
  );
}

export default FormGroupExample;
