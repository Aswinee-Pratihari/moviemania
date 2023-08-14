import{r as o,a as c,j as e,C as l,M as d,u as x,L as j}from"./index-6cbaa86a.js";const p=t=>{const[s,a]=o.useState([]);return o.useEffect(()=>{const n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmY5NWZhMTgzZGU5MDIwNjQyZjA3MmUxNjlhNjk3MCIsInN1YiI6IjYyNzdhZTM5OTk3OWQyMzRmZTczODEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiXT9CsUkeaRonvbDXoeOSNbPpKKQOSYzrx6HNRmP-8"}};(async()=>{const i=await c.get(`https://api.themoviedb.org/3/movie/${t}/similar`,n);a(i.data.results)})()},[t]),{data:s}},b=({id:t})=>{const s={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:4},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},{data:a}=p(t);return e.jsx(e.Fragment,{children:a.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"font-bold text-4xl",children:"Similar Movies"}),e.jsx(l,{responsive:s,children:a==null?void 0:a.map(n=>e.jsx("div",{className:"flex justify-center",children:e.jsx(d,{card:n})},n.id))})]})})},N=t=>{console.log(t);const[s,a]=o.useState([]);return o.useEffect(()=>{const n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmY5NWZhMTgzZGU5MDIwNjQyZjA3MmUxNjlhNjk3MCIsInN1YiI6IjYyNzdhZTM5OTk3OWQyMzRmZTczODEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiXT9CsUkeaRonvbDXoeOSNbPpKKQOSYzrx6HNRmP-8"}};(async()=>{const i=await c.get(`https://api.themoviedb.org/3/movie/${t}/recommendations`,n);a(i.data.results)})()},[t]),{data:s}},u=({id:t})=>{const s={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:4},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},{data:a}=N(t);return e.jsx(e.Fragment,{children:a.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"font-bold text-4xl",children:"Recommended Movies"}),e.jsx(l,{responsive:s,children:a==null?void 0:a.map(n=>e.jsx("div",{className:"flex justify-center",children:e.jsx(d,{card:n})},n.id))})]})})},f=({data:t})=>e.jsx("div",{class:" gap-6 text-center ",children:e.jsx("div",{className:"w-[300px]",children:e.jsx("div",{class:"block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30",children:e.jsxs("div",{class:"p-6",children:[e.jsx("h4",{class:"mb-4 text-2xl font-semibold",children:t==null?void 0:t.author}),e.jsx("hr",{}),e.jsxs("p",{class:"mt-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"inline-block h-7 w-7 pr-2",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"})}),t==null?void 0:t.content.slice(0,200)]})]})})})}),g=({id:t})=>{const s={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},[a,n]=o.useState([]);return o.useEffect(()=>{const r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmY5NWZhMTgzZGU5MDIwNjQyZjA3MmUxNjlhNjk3MCIsInN1YiI6IjYyNzdhZTM5OTk3OWQyMzRmZTczODEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiXT9CsUkeaRonvbDXoeOSNbPpKKQOSYzrx6HNRmP-8"}};(async()=>{const m=await c.get(`https://api.themoviedb.org/3/movie/${t}/reviews`,r);n(m.data.results)})()},[t]),e.jsx(e.Fragment,{children:a.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"font-bold text-4xl",children:"Reviews"}),e.jsx(l,{responsive:s,children:a==null?void 0:a.map(r=>e.jsx("div",{className:"flex space-x-4",children:e.jsx(f,{id:!0,data:r})},r.id))})]})})},v=()=>{var n,r;const{id:t}=x(),[s,a]=o.useState();return console.log(s),o.useEffect(()=>{window.scrollTo(0,0);const i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmY5NWZhMTgzZGU5MDIwNjQyZjA3MmUxNjlhNjk3MCIsInN1YiI6IjYyNzdhZTM5OTk3OWQyMzRmZTczODEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiXT9CsUkeaRonvbDXoeOSNbPpKKQOSYzrx6HNRmP-8"}};(async()=>{const h=await c.get(`https://api.themoviedb.org/3/movie/${t}`,i);a(h.data),console.log(h.data)})()},[t]),e.jsx("div",{className:"container mx-auto space-y-5",children:s&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between items-center max-md:flex-col",children:[e.jsx("div",{className:"flex-1",children:e.jsx("img",{src:`https://www.themoviedb.org/t/p/w440_and_h660_face/${s==null?void 0:s.backdrop_path}`,alt:"",className:" w-full object-contain max-md:w-1/2 mx-auto"})}),e.jsxs("div",{className:"flex-[2] space-y-4 ml-6",children:[e.jsx("h1",{className:"font-bold text-4xl",children:s==null?void 0:s.original_title}),e.jsx("span",{className:"font-bold text-lg text-red-600",children:s==null?void 0:s.tagline}),e.jsx("div",{className:"flex flex-wrap justify-start  gap-4",children:(n=s==null?void 0:s.genres)==null?void 0:n.map(i=>e.jsx(j,{to:`/movie/genre/${i.id}`,className:"text-sm font-bold bg-pink-700 py-1 rounded-sm px-2",children:i.name},i.id))}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-lg tracking-wider text-gray-600 font-semibold",children:s==null?void 0:s.overview}),e.jsx("div",{className:"grid grid-cols-4 gap-5 max-sm:grid-cols-2",children:(r=s==null?void 0:s.production_companies)==null?void 0:r.map(i=>e.jsxs("div",{className:"  flex flex-col items-center ",children:[e.jsx("img",{src:`https://www.themoviedb.org/t/p/w440_and_h660_face/${(i==null?void 0:i.profile_path)||(i==null?void 0:i.logo_path)}`,alt:"",className:" h-24 w-24  object-cover rounded-full border-4 bg-white"}),e.jsx("p",{className:"font-semibold ",children:i==null?void 0:i.name})]},i.id))})]})]})]}),e.jsx(g,{id:t}),e.jsx(b,{id:t}),e.jsx(u,{id:t})]})})};export{v as default};
