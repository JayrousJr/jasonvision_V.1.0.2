import{j as e,a as s}from"./app-CxtQNmfH.js";import{I as c,f as h,g as f,i as j,j as p,k as b}from"./Footer-C5WKTUl1.js";import{T as g,B as u,a as N}from"./index-DZV7eHRA.js";const w=({content:r,created_at:t,facebook:a,slug:l,image:o,instagram:x,location:i,title:m,twitter:n,youtube:d,baseUrl:v})=>e.jsxs("div",{className:"flex flex-1 flex-col w-full max-sm:w-full text-white p-4 shadow-xl rounded-xl border border-semi-dark",children:[e.jsx(s,{href:route("post",l),children:e.jsx("img",{src:"/storage/"+o,className:"h-[300px] object-cover rounded-xl shadow-md"})}),e.jsxs("div",{className:"flex justify-between sm:flex-wrap sm:gap-4 items-center mt-4",children:[e.jsx("p",{className:"font-montserrat",children:t}),e.jsxs("p",{className:"flex justify-center font-montserrat items-center gap-1 border border-semi-dark px-3 py-1 rounded-xl",children:[e.jsx(c,{className:"text-light-bg"}),i]})]}),e.jsx("div",{className:"my-4 flex text-md font-montserrat font-semibold ",children:e.jsx(s,{href:route("post",l),children:m})}),e.jsxs("div",{className:"flex flex-row gap-x-3 text-2xl justify-between items-center mb-4 border-t border-slate-700 pt-4 sm:flex-wrap sm:gap-4",children:[e.jsxs("div",{className:"flex flex-row gap-x-3",children:[e.jsx(s,{href:a,target:"_blank",className:" hover:text-blue-500",children:e.jsx(h,{})}),e.jsx(s,{href:x,target:"_blank",className:" hover:text-rose-600",children:e.jsx(f,{})}),e.jsx(s,{href:n,target:"_blank",className:"hover:text-black",children:e.jsx(j,{})}),e.jsx(s,{href:d,target:"_blank",className:" hover:text-rose-600 text-3xl",children:e.jsx(p,{})})]}),e.jsx("div",{className:"",children:e.jsxs(s,{href:route("post",l),className:"text-sm font-montserrat flex justify-center items-center gap-2 border border-semi-dark px-4 py-2 rounded-xl hover:bg-semi-dark hover:text-white",children:["More ",e.jsx(b,{})]})})]})]}),P=r=>e.jsxs("section",{id:"popular",className:"max-container max-sm:mt-12 border-t border-semi-dark",children:[e.jsxs("div",{className:"flex flex-col justify-start pt-16",children:[e.jsxs("h2",{className:"text-4xl font-palanquin font-bold text-white",children:["Our ",e.jsx("span",{className:"text-semi-dark",children:" Popular "})," OnSite Services"]}),e.jsx("p",{className:"lg:max-w-lg mt-2 font-montserrat text-white font-semibold",children:"Experience top-notch quality LED Screens, Software systems and Smart Parking"})]}),e.jsx("div",{className:"mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-4",children:r.post.data.map((t,a)=>e.jsx(g,{options:{max:20,scale:1,speed:450},children:e.jsx(w,{...t,baseUrl:r.baseUrl},a)}))}),e.jsx("div",{className:"mt-8 ml-2 lg:text-xl sm:text-xl font-montserrat  text-dark-background hover:text-semi-dark sm:max-w-sm",children:r.post.data.length<5&&e.jsx(u,{label:"View More Posts",iconUrl:N,href:route("blog")})})]});export{P};
