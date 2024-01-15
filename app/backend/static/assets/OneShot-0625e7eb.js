import{r as s,bD as ge,bE as t}from"./vendor-7810ac01.js";import{R as Se,G as Ce,V as B,u as p,S as _e,Q as xe,E as ve,A as fe,a as d,b as Te,c as ye,d as Pe,e as be,r as h,i as F,T as Ae,g as O,f as je,h as ke}from"./index-4780bf16.js";import{o as we,m as Ve,D as Ie,T as Q,n as Ne,l as m}from"./fluentui-react-63b3d3f8.js";import"./fluentui-icons-e67e11a4.js";const Ge="_oneshotContainer_p6613_1",Re="_oneshotTopSection_p6613_8",Ee="_oneshotBottomSection_p6613_15",Ue="_oneshotTitle_p6613_25",Be="_oneshotQuestionInput_p6613_39",Fe="_oneshotAnswerContainer_p6613_46",Oe="_oneshotAnalysisPanel_p6613_53",Qe="_oneshotSettingsSeparator_p6613_58",Le="_settingsButton_p6613_62",n={oneshotContainer:Ge,oneshotTopSection:Re,oneshotBottomSection:Ee,oneshotTitle:Ue,oneshotQuestionInput:Be,oneshotAnswerContainer:Fe,oneshotAnalysisPanel:Oe,oneshotSettingsSeparator:Qe,settingsButton:Le};function De(){const[y,g]=s.useState(!1),[S,L]=s.useState(""),[P,Me]=s.useState(""),[b,qe]=s.useState(""),[D,M]=s.useState(Se.Hybrid),[A,q]=s.useState(3),[C,H]=s.useState(!0),[j,z]=s.useState(!1),[l,J]=s.useState(!1),[k,K]=s.useState(Ce.TextAndImages),[w,W]=s.useState(""),[X,Y]=s.useState(""),[Z,$]=s.useState([B.Embedding,B.ImageEmbedding]),[V,ee]=s.useState(!1),[I,te]=s.useState(!1),[N,se]=s.useState(!1),_=s.useRef(""),[x,G]=s.useState(!1),[c,R]=s.useState(),[a,oe]=s.useState(),[E,U]=s.useState(),[u,r]=s.useState(void 0),i=p?ge().instance:void 0,ne=async()=>{const e=i?await O(i):void 0;je(e).then(o=>{se(o.showGPT4VOptions)})};s.useEffect(()=>{ne()},[]);const v=async e=>{_.current=e,c&&R(void 0),G(!0),U(void 0),r(void 0);const o=i?await O(i):void 0;try{const T={messages:[{content:e,role:"user"}],context:{overrides:{prompt_template:S.length===0?void 0:S,prompt_template_prefix:P.length===0?void 0:P,prompt_template_suffix:b.length===0?void 0:b,exclude_category:w.length===0?void 0:w,top:A,retrieval_mode:D,semantic_ranker:C,semantic_captions:j,use_oid_security_filter:V,use_groups_security_filter:I,vector_fields:Z,use_gpt4v:l,gpt4v_input:k}},session_state:a?a.choices[0].session_state:null},me=await ke(T,o);oe(me)}catch(T){R(T)}finally{G(!1)}},ae=(e,o)=>{L(o||"")},ie=(e,o)=>{q(parseInt(o||"3"))},re=(e,o)=>{H(!!o)},le=(e,o)=>{z(!!o)},ce=(e,o)=>{W(o||"")},ue=e=>{v(e),Y(e)},pe=e=>{E===e&&u===d.CitationTab?r(void 0):(U(e),r(d.CitationTab))},f=e=>{r(u===e?void 0:e)},de=(e,o)=>{ee(!!o)},he=(e,o)=>{te(!!o)};return t.jsxs("div",{className:n.oneshotContainer,children:[t.jsxs("div",{className:n.oneshotTopSection,children:[t.jsx(_e,{className:n.settingsButton,onClick:()=>g(!y)}),t.jsx("h1",{className:n.oneshotTitle,children:"Ask your data"}),t.jsx("div",{className:n.oneshotQuestionInput,children:t.jsx(xe,{placeholder:"Example: Does my plan cover annual eye exams?",disabled:x,initQuestion:X,onSend:e=>v(e)})})]}),t.jsxs("div",{className:n.oneshotBottomSection,children:[x&&t.jsx(we,{label:"Generating answer"}),!_.current&&t.jsx(ve,{onExampleClicked:ue,useGPT4V:l}),!x&&a&&!c&&t.jsx("div",{className:n.oneshotAnswerContainer,children:t.jsx(fe,{answer:a,isStreaming:!1,onCitationClicked:e=>pe(e),onThoughtProcessClicked:()=>f(d.ThoughtProcessTab),onSupportingContentClicked:()=>f(d.SupportingContentTab)})}),c?t.jsx("div",{className:n.oneshotAnswerContainer,children:t.jsx(Te,{error:c.toString(),onRetry:()=>v(_.current)})}):null,u&&a&&t.jsx(ye,{className:n.oneshotAnalysisPanel,activeCitation:E,onActiveTabChanged:e=>f(e),citationHeight:"600px",answer:a,activeTab:u})]}),t.jsxs(Ve,{headerText:"Configure answer generation",isOpen:y,isBlocking:!1,onDismiss:()=>g(!1),closeButtonAriaLabel:"Close",onRenderFooterContent:()=>t.jsx(Ie,{onClick:()=>g(!1),children:"Close"}),isFooterAtBottom:!0,children:[t.jsx(Q,{className:n.oneshotSettingsSeparator,defaultValue:S,label:"Override prompt template",multiline:!0,autoAdjustHeight:!0,onChange:ae}),t.jsx(Ne,{className:n.oneshotSettingsSeparator,label:"Retrieve this many search results:",min:1,max:50,defaultValue:A.toString(),onChange:ie}),t.jsx(Q,{className:n.oneshotSettingsSeparator,label:"Exclude category",onChange:ce}),t.jsx(m,{className:n.oneshotSettingsSeparator,checked:C,label:"Use semantic ranker for retrieval",onChange:re}),t.jsx(m,{className:n.oneshotSettingsSeparator,checked:j,label:"Use query-contextual summaries instead of whole documents",onChange:le,disabled:!C}),N&&t.jsx(Pe,{gpt4vInputs:k,isUseGPT4V:l,updateUseGPT4V:e=>{J(e)},updateGPT4VInputs:e=>K(e)}),t.jsx(be,{showImageOptions:l&&N,updateVectorFields:e=>$(e),updateRetrievalMode:e=>M(e)}),p&&t.jsx(m,{className:n.oneshotSettingsSeparator,checked:V||h,label:"Use oid security filter",disabled:!F(i)||h,onChange:de}),p&&t.jsx(m,{className:n.oneshotSettingsSeparator,checked:I||h,label:"Use groups security filter",disabled:!F(i)||h,onChange:he}),p&&t.jsx(Ae,{})]})]})}De.displayName="OneShot";export{De as Component};
//# sourceMappingURL=OneShot-0625e7eb.js.map
