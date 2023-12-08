"use client";

import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!values.email) {
      newErrors.email = "El correo electrónico es obligatorio";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Dirección de correo electrónico no válida";
      isValid = false;
    }

    if (!values.password || values.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      router.push("/home");
    } else {
      console.log("El formulario no es válido");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Card className="w-7/12 flex items-center mx-auto">
      <h2 className="text-center text-xl my-5">Iniciar sesión</h2>
      <form
        className="w-96 flex flex-col flex-wrap"
        onSubmit={handleSubmit}
        action=""
      >
        <Input
          label="Email"
          type="email"
          name="email"
          className="block w-full my-8"
          onChange={handleChange}
          value={values.email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          className="block w-full my-8"
          onChange={handleChange}
          value={values.password}
        />
        <div className="error-message" style={{ color: "red" }}>
          {errors.password}
        </div>{" "}
        <Button
          color="primary"
          auto
          type="submit"
          className="block w-full my-8"
          size="lg"
          name="Enviar"
          id="submit"
        >
          Enviar
        </Button>
      </form>
    </Card>
  );
}
