import{r,a as l,j as e,M as n}from"./index-6cbaa86a.js";const d=c=>{const[i,a]=r.useState();return r.useEffect(()=>{window.scrollTo(0,0);const t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmY5NWZhMTgzZGU5MDIwNjQyZjA3MmUxNjlhNjk3MCIsInN1YiI6IjYyNzdhZTM5OTk3OWQyMzRmZTczODEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiXT9CsUkeaRonvbDXoeOSNbPpKKQOSYzrx6HNRmP-8"}};(async()=>{const o=await l.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${c}&sort_by=popularity.desc&genre=35`,t);a(o.data.results)})()},[c]),{data:i}},h=()=>{const[c,i]=r.useState(1),{data:a}=d(c),t=Array.from({length:20},(s,o)=>o+1);return e.jsxs("div",{className:"container mx-auto",children:[e.jsx("h1",{className:"font-bold text-4xl",children:"Movies Picked Up for you"}),e.jsx("div",{className:"grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2",children:a==null?void 0:a.map(s=>e.jsx("div",{className:"flex justify-center",children:e.jsx(n,{card:s})},s.id))}),e.jsx("div",{className:"flex justify-center items-center space-x-6",children:e.jsx("div",{children:e.jsx("div",{className:"flex items-center space-x-4",children:t==null?void 0:t.map(s=>e.jsx("button",{onClick:()=>{i(s)},className:"bg-red-400 px-2 rounded-full",children:s},s))})})})]})};export{h as default};