import imgBackground from '../assets/DALL·E 2024-11-19 07.17.13 - A detailed and professional frontend developer workspace showcasing a modern Next.js project. The setup features a desktop screen displaying a dynamic.webp';

export const Home = () => {
  return (
    <>
<div className="">
<div className="">
        <img src={imgBackground} alt="Developer workspace" className='' />
      </div>
      <div className="flex justify-center pt-10 ">
      <img src={imgBackground} alt="" className=' w-20 h-20 rounded-full  md:w-40 md:h-40 relative '/>
<h2>Abdelrahman</h2>
<div className="flex flex-col mt-7">
<p className='md:w-96'>I'm a passionate Front-End Developer specializing in React.js, with a strong focus on creating scalable, user-friendly web applications. My expertise lies in building responsive designs and optimizing performance using modern JavaScript frameworks and libraries.

</p>
<ul>
<li><a href=""></a>gitHub</li>
<li><a href=""></a>linkedin</li>
<li><a href=""></a> gmail</li>
</ul>
</div>
      </div>
</div>
    </>
  );
}
