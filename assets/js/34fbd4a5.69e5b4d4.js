(self.webpackChunk=self.webpackChunk||[]).push([[1969],{7940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(4165),o=a(5861),r=a(7294),s=a(3444),i=a(1165),l=a(7425);function d(e,t,a){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var r,l,d,u,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return d=new s.U(r),e.next=21,i.G.create({provider:d});case 21:u=e.sent,(p=a.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=p[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=u.toString(),e.abrupt("break",35);case 29:return e.next=31,u();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,a=e.path,s=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,u=(0,r.useState)(""),c=u[0],m=u[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?p(s.toString(),l,t,m):m(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,a,m);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?p(o,l,t,m):m(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(i){console.log(i)}}}),[]),c}},7425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,n){var o=void 0;if("polkadot"===a||"statemint"===a)o=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),n((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(o)+" "+t[a].symbol).toString())},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},3654:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),s=a(7940),i=["components"],l={id:"learn-simple-payouts",title:"Simple Payouts",sidebar_label:"Simple Payouts",description:"An overview of how payouts work for those staking.",keywords:["payouts","simple payouts","rewards","staking"],slug:"../learn-simple-payouts"},d=void 0,u={unversionedId:"learn/learn-simple-payouts",id:"learn/learn-simple-payouts",title:"Simple Payouts",description:"An overview of how payouts work for those staking.",source:"@site/../docs/learn/learn-simple-payouts.md",sourceDirName:"learn",slug:"/learn-simple-payouts",permalink:"/docs/learn-simple-payouts",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-simple-payouts.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1663544579,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{id:"learn-simple-payouts",title:"Simple Payouts",sidebar_label:"Simple Payouts",description:"An overview of how payouts work for those staking.",keywords:["payouts","simple payouts","rewards","staking"],slug:"../learn-simple-payouts"},sidebar:"docs",previous:{title:"Randomness",permalink:"/docs/learn-randomness"},next:{title:"SPREE",permalink:"/docs/learn-spree"}},p={},c=[{value:"Claiming Rewards",id:"claiming-rewards",level:2},{value:"F.A.Q. and Cautionary Notes",id:"faq-and-cautionary-notes",level:2}],m={toc:c};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot and Kusama make stakers claim their rewards for past eras by submitting a transaction. This\nnaturally leads to spreading out reward distribution, as people make transactions at disparate\ntimes, rather than updating the accounts of all stakers in a single block."),(0,r.kt)("p",null,"Even if everyone submitted a reward claim at the same time, the fact that they are individual\ntransactions would allow the block construction algorithm to process only a limited number per block\nand ensure that the network maintains a constant block time. If all rewards were sent out in one\nblock, this could cause serious issues with the stability of the network."),(0,r.kt)("p",null,"Simple payouts require one transaction per validator, per ",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary##era"},"era"),", to\nclaim rewards. The reason Polkadot requires this is to avoid an attack where someone has several\nthousand accounts nominating a single validator. The major cost in reward distribution is mutating\nthe accounts in storage, and Polkadot cannot pay out several thousand accounts in a single\ntransaction."),(0,r.kt)("h2",{id:"claiming-rewards"},"Claiming Rewards"),(0,r.kt)("p",null,"Polkadot stores the last 84 eras of reward information (e.g. maps of era number to validator points,\nstaking rewards, nomination exposure, etc.). Rewards will not be claimable more than 84 eras after\nthey were earned. This means that all rewards must be claimed within a maximum of 84 eras, although\nunder certain circumstances (described below) this may be as low as 28 eras."),(0,r.kt)("p",null,"If a validator kills their stash, any remaining rewards will no longer be claimable. Before doing\nthis, however, they would need to first stop validating and then unbond the funds in their stash,\nwhich takes 28 eras. If a validator were to immediately chill and start unbonding after rewards are\ncalculated, and nobody issued a payout for that era from that validator in the next 28 eras, the\nreward would no longer be claimable."),(0,r.kt)("admonition",{title:"In order to be absolutely sure that staking rewards can be claimed, users should trigger a",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"payout before 28 eras have passed.")),(0,r.kt)("p",null,"Anyone can trigger a payout for any validator, as long as they are willing to pay the transaction\nfee. Someone must submit a transaction with a validator ID and an era index. Polkadot will\nautomatically calculate that validator's reward, find the top\n",(0,r.kt)(s.Z,{network:"polkadot",path:"query.staking.maxNominatorRewardedPerValidator",defaultValue:256,mdxType:"RPC"}),"\n","\nnominators for that era, and distribute the rewards pro rata."),(0,r.kt)("admonition",{title:"The Staking system only applies the highest",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"",(0,r.kt)(s.Z,{network:"polkadot",path:"query.staking.maxNominatorRewardedPerValidator",defaultValue:256,mdxType:"RPC"}),"\n","\nnominations to each validator to reduce the complexity of the staking set.")),(0,r.kt)("p",null,"These details are handled for you automatically if you use the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/payout"},"Polkadot-JS UI"),", which also allows you to submit\nbatches of eras at once."),(0,r.kt)("p",null,'To claim rewards on Polkadot-JS UI, you will need to be in the "Payouts" tab underneath "Staking",\nwhich will list all the pending payouts for your stashes.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pending-payouts",src:a(6416).Z,width:"2876",height:"600"})),(0,r.kt)("p",null,'To then claim your reward, select the "Payout all" button. This will prompt you to select your stash\naccounts for payout.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"select-payouts",src:a(2348).Z,width:"2192",height:"624"})),(0,r.kt)("p",null,"Once you are done with payout, another screen will appear asking for you to sign and submit the\ntransaction."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"transaction-payouts",src:a(1083).Z,width:"2878",height:"818"})),(0,r.kt)("h2",{id:"faq-and-cautionary-notes"},"F.A.Q. and Cautionary Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rewards expire after 84 eras. On Polkadot, that's about 84 days. On Kusama, it is approximately\n21 days. Validators should claim all pending rewards before killing their stash in the event the\nvalidator decides to ",(0,r.kt)("inlineCode",{parentName:"li"},"chill")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"unbonds all")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"withdraws unbonded"),". Nominators will not miss\nout on rewards if they claim the pending rewards for a validator within 28 days. Essentially, the\ndeadline to ensure you get staking rewards is 28 eras. If the validator verifies its intent and\ndoes not unbond and withdraw, the 84 era timeline holds."),(0,r.kt)("li",{parentName:"ol"},"Claiming rewards (or neglecting to claim rewards) does not affect nominations in any way.\nNominations will persist after claiming rewards or after the rewards expire."),(0,r.kt)("li",{parentName:"ol"},'Rewards are not minted until they are claimed. Therefore, if your reward destination is "stash,\nincreasing amount at stake", then your staked amount does not reflect your rewards until you\nclaim them. If you want to maximize compounding, then you will need to claim often or nominate\nvalidators which regularly claim for you.'),(0,r.kt)("li",{parentName:"ol"},"Staking operations at the end of an era are closed to allow the off-chain validator election to\ntake place. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-phragmen#off-chain-phragmen"},"Off-chain Phragm\xe9n")," for more information.")))}h.isMDXComponent=!0},1083:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_payout_complete-87ad124d5d70e50c16f1434074562d70.png"},6416:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_payout_page-fc4f62399f71b542e9eaac01405ef528.png"},2348:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_payout_popup-feb847cdfae64f3fa247cdb2beea4ba6.png"},3971:()=>{},6601:()=>{}}]);