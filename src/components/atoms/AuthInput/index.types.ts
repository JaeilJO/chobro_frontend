export interface AuthInpuProps {
  type: "email" | "password" | "text";
  placeholder: string;

  //React Hook Form
  on_change: (...event: any[]) => void;
}
