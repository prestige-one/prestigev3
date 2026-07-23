import Breacrumb from "@/common/Breacrumb";
import SiteHeader from "@/layouts/SiteHeader";
import React from "react";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import ContactArea from "./ContactArea";

const Contact = () => {
	return (
		<>
			<SiteHeader />
			<Breacrumb
				title="Get in Touch with Us"
				subtitle="Contact"
				description="Ready to take the next step? Contact us for a consultation or callback. Our team is here to guide you through every phase of your real estate journey, ensuring your vision becomes reality."
				className="po-contact-hero"
			/>
			<ContactArea />
			<SiteFooterBlock />
		</>
	);
};

export default Contact;
