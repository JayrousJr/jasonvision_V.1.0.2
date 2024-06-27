import{W as N,j as e,a as g,Y as w}from"./app-BgUDhbhU.js";import{l as h,m as _,N as P,F as k}from"./Footer-D-QPEesu.js";import{I as C,P as I}from"./index-u9dPWVht.js";import{P as M}from"./PopUp-Bpi5FSxn.js";import{I as S}from"./InputError-CHCb8Iqd.js";import{l as D}from"./logo-3Ose3Nk4.js";import"./open-closed-CURYsZA4.js";import"./keyboard-DV9OIWHR.js";function B({props:t}){var x;const d=t.success,a=t.post.data,l=t.comment.data,c=t.service.data,i=t.posts.data,n=t.comment.meta,o=(x=t.auth.user)==null?void 0:x.id,{data:p,setData:m,post:u,processing:j,reset:y,progress:F,errors:f,transform:b}=N({content:"",user_id:"",post_id:""});b(s=>({...s,user_id:o,post_id:a.id}));const v=s=>{s.preventDefault(),u(route("posting",a.slug),{preserveScroll:!0,onSuccess:y("content")})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"isolate overflow-hidden bg-white px-6 py-0 lg:overflow-visible lg:px-0",children:[e.jsx(M,{props:d}),e.jsx("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:e.jsxs("svg",{className:"absolute left-[max(50%,25rem)] top-0 h-[90rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]","aria-hidden":"true",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"e813992c-7d03-4cc4-a2bd-151760b470a0",width:200,height:200,x:"50%",y:-1,patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M100 200V.5M.5 .5H200",fill:"none"})})}),e.jsx("svg",{x:"50%",y:-1,className:"overflow-visible fill-gray-50",children:e.jsx("path",{d:"M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z",strokeWidth:0})}),e.jsx("rect",{width:"100%",height:"100%",strokeWidth:0,fill:"url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"})]})}),e.jsx("div",{className:"max-w-7xl text-center pt-12 text-5xl sm:text-6xl font-bold",children:"Blog Page"}),e.jsxs("div",{className:"mx-auto grid max-w-2xl items-start sm:grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-5 lg:px-8",children:[e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("h2",{className:"text-3xl mb-6  font-bold tracking-tight text-gray-700 capitalize text-center sm:text-4xl",children:a.title}),e.jsx("img",{className:"w-full h-[22rem] rounded-xl mt-3 object-cover object-center max-w-none  bg-gray-900 shadow-sm ring-1 ring-gray-400/10 sm:w-full",src:t.baseUrl+"/storage/"+a.image,alt:"Blog Image"}),e.jsx("p",{className:"mt-4 text-gray-500",dangerouslySetInnerHTML:{__html:a.content}}),e.jsxs("dl",{className:"mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-4 border-t border-gray-200 pt-4",children:[e.jsx("dt",{children:e.jsx(C,{className:"text-[1.2rem] text-[#f43f5e]"})}),e.jsx("dd",{className:"text-md font-bold uppercase text-gray-500",children:a.location})]}),e.jsxs("div",{className:"inline-flex items-center gap-4 border-t border-gray-200 pt-4",children:[e.jsx("dt",{children:e.jsx(h,{className:"text-[1.2rem] text-[#f43f5e]"})}),e.jsx("dd",{className:"text-md font-bold text-gray-500",children:a.created_at})]}),e.jsxs("div",{className:"inline-flex items-center gap-4 border-t border-gray-200 pt-4",children:[e.jsx("dt",{className:"text-[1.2rem]  font-bold text-gray-500",children:n.total}),e.jsx("dd",{className:"text-md font-bold text-gray-500",children:"Comments"})]})]}),e.jsx("div",{className:"my-6",children:l.map((s,r)=>e.jsxs("div",{className:"inline-flex gap-8 my-6",children:[e.jsx("img",{className:"w-16 h-16 rounded-full",src:t.baseUrl+"/storage/"+s.user_id.image,alt:"User Image "}),e.jsxs("div",{className:"",children:[e.jsx("p",{className:"text-gray-500 font-normal text-[1.3rem]",children:s.user_id.name}),e.jsxs("p",{className:"text-gray-400 capitalize items-center inline-flex gap-4",children:[e.jsx(h,{className:"text-[#113f5e]"}),s.created_at]}),e.jsx("p",{className:"text-gray-900 text-[.9rem]",children:s.content})]})]},r))}),e.jsx(I,{props:n}),e.jsx("div",{className:"bg-slate-50 p-6  border-2",children:e.jsxs("form",{onSubmit:v,className:"mx-auto max-w-xl ",children:[e.jsx("p",{className:"text-2xl text-center font-semibold",children:"Comment"}),e.jsx("div",{className:"grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2",children:e.jsx("div",{className:"sm:col-span-2",children:e.jsxs("div",{className:"mt-2.5",children:[e.jsx("input",{type:"text",value:o,hidden:!0,onChange:s=>m("user_id",s.target.value),id:"user_id",name:"user_id"}),e.jsx("input",{type:"text",value:a.id,hidden:!0,onChange:s=>m("post_id",s.target.value),id:"post_id",name:"post_id"}),e.jsx("textarea",{name:"content",id:"content",rows:4,className:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6",value:p.content,onChange:s=>m("content",s.target.value)}),e.jsx(S,{message:f.content,className:"mt-2 text-[red]"})]})})}),e.jsx("div",{className:"mt-10",children:e.jsx("button",{type:"submit",className:"capitalize block w-full rounded-md bg-slate-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600",disabled:j,children:"Send your Comment"})})]})})]}),e.jsxs("div",{className:"sm:mx-6 lg:col-span-2 bg-gray-50 border border-3 p-8 grid grid-cols-1 ",children:[e.jsx("hr",{className:"border-1 border-gray-400 my-8"}),e.jsx("p",{className:" text-2xl bg-[#D81159] text-[#D81159] py-2 px-3",children:"."}),e.jsxs("div",{className:"mt-8 border border-1 rounded-xl py-8",children:[e.jsx("img",{src:D,alt:"Image",className:"flex self-center mx-auto w-[8rem] h-[8rem] object-cover rounded-full"}),e.jsx("div",{className:"text-center font-semibold text-xl text-gray-400 mt-4",children:"Jason Vision Technologies"}),e.jsx("div",{className:"text-center text-gray-400 mb-4",children:"Your First Priority"}),e.jsx("p",{className:"text-center mx-2 text-gray-500",children:"At Jason Vision Technology, we lead in LED installation, software development, and smart parking systems. Our expert team delivers innovative, efficient, and reliable solutions tailored to your needs. With cutting-edge technology and a passion for excellence, we exceed expectations and set industry standards. Trust us to illuminate your path to success and revolutionize your operations."})]}),e.jsx("hr",{className:"border-1 border-gray-400 my-8"}),e.jsxs("div",{className:"",children:[e.jsx("p",{className:"text-gray-50 text-2xl bg-[#D81159] py-2 px-3",children:"Popular Posts"}),i.map((s,r)=>e.jsxs("div",{className:"grid grid-cols-2 gap-3 items-center",children:[e.jsx("img",{src:t.baseUrl+"/storage/"+s.image,alt:"Post Image",className:"w-full h-[5rem] rounded-md mt-3 object-cover object-center max-w-none  bg-gray-900 shadow-sm ring-1 ring-gray-400/10 sm:w-full"}),e.jsxs("div",{className:"",children:[e.jsx(g,{href:route("post",s==null?void 0:s.slug),className:"text-gray-600 hover:text-gray-900",children:s.title}),e.jsx("p",{className:"text-gray-400",children:s.created_at})]})]},r))]}),e.jsx("hr",{className:"border-1 border-gray-400 my-8"}),e.jsxs("div",{className:"",children:[e.jsx("p",{className:"text-gray-50 text-2xl bg-[#D81159] py-2 px-3",children:"Quick Visit"}),e.jsx("div",{className:"flex flex-col my-6",children:c.map((s,r)=>e.jsxs(g,{className:"text-gray-500 inline-flex items-center gap-4 hover:text-gray-900 hover:underline",children:[e.jsx(_,{className:"text-[green]"})," ",s.name]},r))})]})]})]})]})})}function J({post:t,posts:d,auth:a,service:l,comment:c,baseUrl:i,success:n,social:o}){return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Blog Post"}),e.jsx(P,{props:{auth:a,baseUrl:i}}),e.jsx(B,{props:{post:t,baseUrl:i,posts:d,service:l,comment:c,auth:a,success:n}}),e.jsx(k,{props:l,social:o})]})}export{J as default};