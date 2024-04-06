import HomeSlider from "@/componants/HomeSlider/HomeSlider";
import Navbar from "@/componants/Navbar/Navbar"
import BlogSlider from "@/componants/blogCards/BlogSlider";
import CategoriesSlider from "@/componants/categories/CategoriesSlider";



export default function Home() {
  return (
    <main >
      <Navbar></Navbar>
      <HomeSlider/>
      <CategoriesSlider/>
      <BlogSlider/>
     
      
    </main>
  );
}
