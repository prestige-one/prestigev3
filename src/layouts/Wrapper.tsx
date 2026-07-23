// "use client";
import ScrollToTop from "@/common/ScrollToTop";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import SmoothScroll from "@/components/common/SmoothScroll";

 

const Wrapper = ({ children }: any) => {
 
	return <>

  <SmoothScroll />
  {children}
  <WhatsAppFloat />
  <ScrollToTop />
  </>;
};

export default Wrapper;
