import{d as w,D as b,g as f,k,o as a,c as o,a as e,e as t,w as i,E as _,G as C,n as h,u as p,h as S,r as B,i as r,H as x}from"./entry.5a40779e.js";import{l as V}from"./switch.c23d3c60.js";const E={class:"min-h-full flex"},R={class:"flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"},q={class:"mx-auto w-full max-w-sm lg:w-96"},O={key:0,class:"mt-6 text-3xl font-extrabold text-gray-900 dark:text-white"},j={key:1,class:"mt-6 text-3xl font-extrabold text-gray-900 dark:text-white"},D={class:"mt-8"},F={key:0,class:"text-sm font-medium text-gray-700 dark:text-gray-200"},N={key:1,class:"text-sm font-medium text-gray-700 dark:text-gray-200"},P={class:"mt-1 grid grid-cols-2 gap-3"},U=e("div",{class:"mt-6 relative"},[e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"}),e("div",{class:"relative flex justify-center text-sm"},[e("span",{class:"px-2 text-gray-500 dark:text-gray-200"}," Or continue with ")])],-1),T={class:"mt-6"},$={action:"#",method:"POST",class:"space-y-6"},G={class:"mt-1"},H={key:0,class:"space-y-1"},I={class:"mt-1"},K={class:"space-y-1"},M={class:"mt-1"},z={class:"space-y-1"},A={class:"mt-1"},J={class:"flex items-center justify-between"},Q={class:"flex items-center"},W=e("span",{class:"sr-only"},"Remember me",-1),L=e("div",{class:"ml-3"},[e("p",{class:"text-sm text-gray-500"},"Remember me")],-1),X={key:0,class:"text-sm"},Y=e("a",{href:"#",class:"font-medium text-teal-700 hover:text-teal-500"}," Forgot your password? ",-1),Z=[Y],ee={key:2,class:"flex"},te={key:3,class:"flex"},se=e("div",{class:"hidden lg:block relative w-0 flex-1"},[e("img",{class:"absolute inset-0 h-[50rem] w-full",src:"https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",alt:""})],-1),le=w({__name:"auth",setup(ae){const v=b(),c=f(!1);k(()=>{});const s=f(!1),y=async()=>{const u={email:"chovpr@gmail.com",password:"testtests",firstname:"Prema",surname:"Chov"};await v.signUp(u)},g=async()=>{const u={email:"chovpr@gmail.com",password:"testtests"};await v.signIn(u)};return(u,l)=>{const n=S,d=B("FormKit");return a(),o("div",E,[e("div",R,[e("div",q,[e("div",null,[s.value?(a(),o("h2",j,"Sign up to your account")):(a(),o("h2",O,"Sign in to your account"))]),e("div",D,[e("div",null,[e("div",null,[s.value?(a(),o("p",N,"Sign up with")):(a(),o("p",F,"Sign in with")),e("div",P,[e("div",null,[t(n,{class:"w-full"},{default:i(()=>[r("Facebook")]),_:1})]),e("div",null,[t(n,{class:"w-full"},{default:i(()=>[r("Google")]),_:1})])])]),U]),e("div",T,[e("form",$,[e("div",null,[e("div",G,[t(d,{type:"email",label:"Email address",validation:"required|email","validation-visibility":"dirty"})])]),s.value?_("",!0):(a(),o("div",H,[e("div",I,[t(d,{type:"password",name:"password",label:"Password",validation:"required","validation-visibility":"dirty"})])])),s.value?(a(),C(d,{key:1,type:"group"},{default:i(()=>[e("div",K,[e("div",M,[t(d,{type:"password",name:"password",label:"Password",validation:"required","validation-visibility":"dirty"})])]),e("div",z,[e("div",A,[t(d,{type:"password",name:"password_confirm",label:"Confirm password",validation:"required|confirm","validation-visibility":"dirty"})])])]),_:1})):_("",!0),e("div",J,[e("div",Q,[t(p(V),{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=m=>c.value=m),class:h([c.value?"bg-gradient-to-r from-teal-700 to-teal-900":"bg-gray-200","relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2"])},{default:i(()=>[W,e("span",{"aria-hidden":"true",class:h([c.value?"translate-x-5":"translate-x-0","inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"])},null,2)]),_:1},8,["modelValue","class"]),L]),s.value?_("",!0):(a(),o("div",X,Z))]),s.value?(a(),o("div",ee,[t(n,{class:"mr-2",onClick:y},{default:i(()=>[r(" Sign up")]),_:1}),t(n,{type:p(x).BORDER,onClick:l[1]||(l[1]=m=>s.value=!s.value)},{default:i(()=>[r(" Sign in ")]),_:1},8,["type"])])):(a(),o("div",te,[t(n,{class:"mr-2",onClick:g},{default:i(()=>[r(" Sign in ")]),_:1}),t(n,{type:p(x).BORDER,onClick:l[2]||(l[2]=m=>s.value=!s.value)},{default:i(()=>[r(" Sign up")]),_:1},8,["type"])]))])])])])]),se])}}});export{le as default};
