import FinalContactForm from "./FinalContactForm";

type ProjectRegisterContactSectionProps = {
  defaultProject: string;
};

export default function ProjectRegisterContactSection({ defaultProject }: ProjectRegisterContactSectionProps) {
  return (
    <section id="register-interest" className="po-project-page-register">
      <div className="container">
        <h2 className="po-project-page-register-title">Have any questions? Let&apos;s connect.</h2>
        <p className="po-project-page-register-lead">Register your interest and our team will get back to you.</p>
        <FinalContactForm defaultProject={defaultProject} />
      </div>
    </section>
  );
}
