import { Input } from "@nextui-org/input";

export default function Login() {
  return (
    <form>
      <Input
        isRequired
        label="Email"
        type="email"
        placeholder="Ingrese su email"
        className="max-w-xs"
        color="danger"
      />
      <Input isRequired label="Password" type="password" className="max-w-xs" />
    </form>
  );
}
