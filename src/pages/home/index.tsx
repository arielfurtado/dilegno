import Layout from '../layout';
import Menu from '../../components/menu';
import BannerHome from '../../components/bannerHome';
import Footer from '../../components/footer';
import ValuesSection from '../../components/valuesSection';
import ProjectsSection from '../../components/projects';
import ContactSection from '../../components/contactSection';

export default function Home() {
  return (
    <Layout title="Home Page" description="zz">
      <Menu />
      <BannerHome />
      <ValuesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
}
