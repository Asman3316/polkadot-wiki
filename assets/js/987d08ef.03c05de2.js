"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1748],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(a),u=r,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||o;return a?n.createElement(d,i(i({ref:e},p),{},{components:a})):n.createElement(d,i({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11732:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"build-smart-contracts",title:"Smart Contracts",sidebar_label:"Smart Contracts",description:"How smart contracts play their role in the Polkadot ecosystem.",keywords:["build","smart contract","evm","wasm"],slug:"../build-smart-contracts"},l=void 0,c={unversionedId:"build/build-smart-contracts",id:"build/build-smart-contracts",title:"Smart Contracts",description:"How smart contracts play their role in the Polkadot ecosystem.",source:"@site/../docs/build/build-smart-contracts.md",sourceDirName:"build",slug:"/build-smart-contracts",permalink:"/docs/build-smart-contracts",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-smart-contracts.md",tags:[],version:"current",lastUpdatedBy:"Dan Shields",lastUpdatedAt:1656334890,formattedLastUpdatedAt:"6/27/2022",frontMatter:{id:"build-smart-contracts",title:"Smart Contracts",sidebar_label:"Smart Contracts",description:"How smart contracts play their role in the Polkadot ecosystem.",keywords:["build","smart contract","evm","wasm"],slug:"../build-smart-contracts"},sidebar:"docs",previous:{title:"Decentralized Storage",permalink:"/docs/build-storage"},next:{title:"Oracles",permalink:"/docs/build-oracle"}},p={},h=[{value:"Difference between developing a smart contract and a parachain",id:"difference-between-developing-a-smart-contract-and-a-parachain",level:2},{value:"Layer of Abstraction",id:"layer-of-abstraction",level:3},{value:"Gas Fees",id:"gas-fees",level:3},{value:"Building a Smart Contract",id:"building-a-smart-contract",level:2},{value:"Frontier EVM Contracts",id:"frontier-evm-contracts",level:3},{value:"Substrate Contracts",id:"substrate-contracts",level:3},{value:"Resources",id:"resources",level:4},{value:"Contracts Pallet",id:"contracts-pallet",level:3},{value:"Storage Rent: Deprecated",id:"storage-rent-deprecated",level:4},{value:"Polkadot Standards Proposals (PSPs)",id:"polkadot-standards-proposals-psps",level:3},{value:"Ink",id:"ink",level:3},{value:"Libraries for Smart Contracts in <code>ink!</code>",id:"libraries-for-smart-contracts-in-ink",level:4},{value:"Smart Contract Environments are still Maturing",id:"smart-contract-environments-are-still-maturing",level:2},{value:"Parity Tech",id:"parity-tech",level:3},{value:"Parachains",id:"parachains",level:3},{value:"Moonbeam",id:"moonbeam",level:4},{value:"Astar",id:"astar",level:4},{value:"Acala",id:"acala",level:4},{value:"Phala",id:"phala",level:4},{value:"Keep In Touch",id:"keep-in-touch",level:2}],m={toc:h};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Polkadot Relay Chain will\nnot natively support smart contracts, however,\nparachains on Polkadot",(0,o.kt)("br",{parentName:"p"}),"\n","will support smart contracts."),(0,o.kt)("h2",{id:"difference-between-developing-a-smart-contract-and-a-parachain"},"Difference between developing a smart contract and a parachain"),(0,o.kt)("h3",{id:"layer-of-abstraction"},"Layer of Abstraction"),(0,o.kt)("p",null,"When you write a smart contract, you are creating the instructions that associate with\nand deploy on a specific chain address."),(0,o.kt)("p",null,"In comparison, a runtime module is the entire logic of a chain's state transitions (what's called a\nstate transition function)."),(0,o.kt)("p",null,"Smart contracts must consciously implement upgradability while parachains will have the ability to\nswap out their code entirely through a root command or via the governance pallet."),(0,o.kt)("p",null,"When you build a smart contract, it will eventually be deployed to a target chain with its own\nenvironment. Parachains allow the developer to declare the environment of their own chain, even\nallowing others to write smart contracts for it."),(0,o.kt)("h3",{id:"gas-fees"},"Gas Fees"),(0,o.kt)("p",null,"Smart contracts must find a way to limit their own execution, or else full nodes are vulnerable to\nDOS attacks. An infinite loop in a smart contract, for example, could consume the computational\nresources of an entire chain, preventing others from using it. The\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Halting_problem"},"halting problem"),' shows that with a powerful enough\nlanguage, it is impossible to know ahead of time whether or not a program will ever cease execution.\nSome platforms, such as Bitcoin, get around this constraint by providing a very restricted scripting\nlanguage. Others, such as Ethereum, "charge" the smart contract "gas" for the rights to execute\ntheir code. If a smart contract does get into a state where execution will never halt, it eventually\nruns out of gas, ceases execution, and any state transition that the smart contract would have made is\nrolled back. Polkadot uses a ',(0,o.kt)("em",{parentName:"p"},"weight-fee model"),"\nand not a ",(0,o.kt)("em",{parentName:"p"},"gas-metering model"),"."),(0,o.kt)("p",null,"Parachains can implement arbitrarily powerful programming languages and contain no gas notion for their\nown native logic. This means that some functionality is easier to implement for the\ndeveloper, but some constructs, such as a loop without a terminating\ncondition, should ",(0,o.kt)("em",{parentName:"p"},"never")," be implemented. Leaving certain logic, such as complex loops that\ncould run indefinitely, to a non-smart contract layer, or even trying to eliminate it, will often be a\nwiser choice. Parachains try to be proactive, while smart contract\nplatforms are event-driven."),(0,o.kt)("h2",{id:"building-a-smart-contract"},"Building a Smart Contract"),(0,o.kt)("p",null,"The Polkadot relay chain itself will not support smart contracts. However, since the parachains that\nconnect to Polkadot can support arbitrary state transitions, they can support smart contracts."),(0,o.kt)("p",null,"Substrate presently supports smart contracts out-of-the-box in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The EVM pallet offered by ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/frontier"},"Frontier"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/master/frame/contracts/"},"Contracts pallet")," in the FRAME library for Wasm-based contracts.")),(0,o.kt)("h3",{id:"frontier-evm-contracts"},"Frontier EVM Contracts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/frontier"},"Frontier")," is the suite of tools that enables a Substrate chain to run Ethereum contacts\n(EVM) natively with the same API/RPC interface, Ethereum exposes on Substrate. Ethereum Addresses\ncan also be mapped directly to and from Substrate's SS58 scheme from existing accounts."),(0,o.kt)("h3",{id:"substrate-contracts"},"Substrate Contracts"),(0,o.kt)("p",null,"Substrate offers a built-in\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_contracts/index.html"},"contract pallet"),";\nas time goes on, more parachains will support ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"WebAssembly")," smart contracts.\nAdditionally, there is the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/frontier/tree/master/frame/evm#evm-module"},"EVM Pallet"),", which allows\na parachain to implement the Ethereum Virtual Machine, thereby supporting almost direct ports of\nEthereum contracts."),(0,o.kt)("p",null,"A video version of the recap of the smart contract situation is available\non the ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=fKHkFBXaUxQ"},"Polkadot YouTube channel"),"."),(0,o.kt)("h4",{id:"resources"},"Resources"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/56041305"},"When should I build a Substrate runtime versus a Substrate smart contract"),"?\nThis post answers the question more technically of when a developer might choose to develop a\nruntime versus a smart contract."),(0,o.kt)("p",null,"Here is the list of current resources available to developers who want to get started writing smart\ncontracts to deploy on parachains based on Substrate."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink"},"ink!")," - Parity's ink to write smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.substrate.io/tutorials/smart-contracts/develop-contract/"},"Substrate ink! Workshop")," - Walks you\nthrough the basics of writing and deploying an ERC-20 token using ",(0,o.kt)("inlineCode",{parentName:"li"},"ink!"),".")),(0,o.kt)("h3",{id:"contracts-pallet"},"Contracts Pallet"),(0,o.kt)("p",null,"The experience of deploying to an EVM-based chain may be more familiar to developers that have\nwritten smart contracts before. However, the Contracts pallet makes some notable improvements to the\ndesign of the EVM:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Wasm"),". The Contracts pallet uses WebAssembly as its compilation target. Any language that\ncompiles to Wasm can potentially be used to write smart contracts. Nevertheless, it is better to\nhave a dedicated domain-specific language, and for that reason Parity offers the ",(0,o.kt)("a",{parentName:"p",href:"#ink"},"ink!")," language.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rent"),". Contracts must pay rent or else hold a deposit suitably large enough in order to\njustify its existence on-chain. When a contract does not uphold this, it may create what's called\na ",(0,o.kt)("em",{parentName:"p"},"tombstone")," which is a reference to the contract. In some conditions, the contract will be\ndeleted outright along with its storage if it does not maintain these requirements.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Caching"),". Contracts are cached by default and therefore means they only need to be deployed\nonce and afterward be instantiated as many times as you want. This helps to keep the storage load\non the chain down to the minimum. On top of this, when a contract is no longer being used and the\n",(0,o.kt)("em",{parentName:"p"},"existential deposit")," is drained, the code will be erased from storage (known as reaping)."))),(0,o.kt)("h4",{id:"storage-rent-deprecated"},"Storage Rent: Deprecated"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pallet_contracts")," was initially designed to combat unbounded state growth by charging contracts for\nthe state they consume but has since been deprecated."),(0,o.kt)("p",null,"See the associated ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/9669"},"pull request")," for more details."),(0,o.kt)("h3",{id:"polkadot-standards-proposals-psps"},"Polkadot Standards Proposals (PSPs)"),(0,o.kt)("p",null,"Web3 Foundation supports proposals for Polkadot that define a set standards to fit ecosystem needs.\nThese standards go through several acceptance phases, where the engagement of the whole community is needed to build valuable and future-proof standards.\nAll the teams who will benefit from a standard need to agree on its content."),(0,o.kt)("p",null,"Some of these PSPs are targeting Substrate's ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts")," pallet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md"},"PSP22 - Fungible Token Standard"),"\nPlease visit ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"Polkadot Standards Proposals (PSPs) Github")," for more information.")),(0,o.kt)("h3",{id:"ink"},"Ink"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink"},"ink!")," is a domain specific language for writing smart contracts\nin Rust and compiles to Wasm code. As it states in its README, it is still in an experimental phase\nso brave developers should be aware that they might have a bumpy - but workable - development\nexperience. There are some projects that have built projects in ink! with a decent level of\ncomplexity such as Plasm's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/staketechnologies/Plasm"},"Plasma contracts"),", so it is mature enough to start\nbuilding interesting things."),(0,o.kt)("p",null,"For interested developers, they can get started writing smart contracts using ink! by studying the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/tree/master/examples"},"examples")," that were already written. These\ncan be used as guideposts to writing more complex logic that will be deployable on smart contract\nparachains."),(0,o.kt)("p",null,"ink! has laid much of the groundwork for a new smart contract stack that is based on a Wasm virtual\nmachine and compatible with Substrate chains."),(0,o.kt)("h4",{id:"libraries-for-smart-contracts-in-ink"},"Libraries for Smart Contracts in ",(0,o.kt)("inlineCode",{parentName:"h4"},"ink!")),(0,o.kt)("p",null,"Collected below are some community examples of smart contracts in ",(0,o.kt)("inlineCode",{parentName:"p"},"ink!"),". ",(0,o.kt)("strong",{parentName:"p"},"Are you working on a\nsmart contract example? Ask us to add it to this page!")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.openbrush.io/"},"OpenBrush"),": an ",(0,o.kt)("inlineCode",{parentName:"li"},"ink!")," library providing standard contracts based on\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"PSP")," with useful contracts and macros for building."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/metis"},"Metis"),": a Wasm contract standard library, developed by ",(0,o.kt)("a",{parentName:"li",href:"https://patract.io/"},"Patract Labs"),".")),(0,o.kt)("h2",{id:"smart-contract-environments-are-still-maturing"},"Smart Contract Environments are still Maturing"),(0,o.kt)("p",null,"It is still early for smart contracts on Polkadot\nand the development is only now stabilizing.\nWe are actively producing content to help developers get up to speed and will maintain the Wiki\nwith the latest resources. You should also keep up to date with the following links:"),(0,o.kt)("h3",{id:"parity-tech"},"Parity Tech"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink"},"ink!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},"Substrate contracts pallet"))),(0,o.kt)("h3",{id:"parachains"},"Parachains"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://moonbeam.network"},"Moonbeam")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://astar.network/"},"Astar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://acala.network/"},"Acala")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://phala.network"},"Phala"))),(0,o.kt)("p",null,"Many smart contract platforms are building to become a parachain in the ecosystem.\nA community created and maintained list of different smart\ncontract platforms building on Polkadot can be found at\n",(0,o.kt)("a",{parentName:"p",href:"https://www.polkaproject.com/#/projects?cateID=1&tagID=6"},"PolkaProjects"),"."),(0,o.kt)("h4",{id:"moonbeam"},"Moonbeam"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://moonbeam.network"},"Moonbeam")," is another project that is planning to deploy to Polkadot as a parachain and will\nsupport Ethereum compatible smart contracts. Since Moonbeam uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/frontier"},"Frontier"),", an interoperability layer\nwith existing Ethereum tooling, it will support all applications that are written to target the EVM\nenvironment with little friction."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.moonbeam.network/networks/moonriver/"},"Moonriver"),", a companion network to Moonbeam, launched\nas a parachain on Kusama. Parachain functionality is live, and features are being incrementally released.\nThe final phase of the launch will include EVM functionality and balance transfers."),(0,o.kt)("p",null,"Try deploying a smart contract to Moonbeam by following their ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moonbeam.network/"},"documentation"),"."),(0,o.kt)("h4",{id:"astar"},"Astar"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://astar.network/"},"Astar")," (formerly Plasm) is built on Substrate as a smart contract platform and\nintends to integrate with Polkadot as a parachain. ",(0,o.kt)("a",{parentName:"p",href:"https://shiden.astar.network/"},"Shiden")," is the sister\nnetwork to Astar, is currently live on Kusama, and supports EVM, WASM, and Layer 2 solutions. Astar aims\nto house all layer 2 scaling solutions and support all layer 2 protocols through the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.astar.network/learn/layer2/optimistic-virtual-machine"},"OVM")," (Optimistic Virtual Machine)."),(0,o.kt)("p",null,"Try deploying an Ethereum or ink! smart contract by following their\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.astar.network/build/smart-contracts"},"documentation"),"."),(0,o.kt)("h4",{id:"acala"},"Acala"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://acala.network/"},"Acala")," is a decentralized finance consortium and DeFi infrastructure chain\ndelivering a set of protocols to serve as the DeFi hub on Polkadot. ",(0,o.kt)("a",{parentName:"p",href:"https://acala.network/karura"},"Karura"),",\nAcala's canary network is live as a parachain on Kusama. Interested teams are now able to deploy DApps and\nsmart contracts on Karura's platform. Acala is also implementing the\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.acala.network/learn/acala-evm/why-acala-evm"},"Acala EVM"),"."),(0,o.kt)("p",null,"Try deploying an Acala EVM smart contract by following their\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.acala.network/build/development-guide/smart-contracts"},"documentation"),"."),(0,o.kt)("h4",{id:"phala"},"Phala"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://phala.network"},"Phala")," is a privacy-preserving cloud compute platform and aims to provide strong\nguarantees of confidentiality as a cross-chain platform. As a smart contract platform, Phala will enable\nthe use of confidential smart contracts on Polkadot. ",(0,o.kt)("a",{parentName:"p",href:"https://phala.network/en/khala"},"Khala")," is Phala's\ncanary network and is live as a parachain on Kusama."),(0,o.kt)("p",null,"Try deploying a confidential smart contract by following their\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.phala.network/en-us/docs/developer/your-first-confidential-contract/"},"documentation"),"."),(0,o.kt)("h2",{id:"keep-in-touch"},"Keep In Touch"),(0,o.kt)("p",null,"Even though the tooling is still maturing, the advantage of being early will be the familiarity and\nhead start on your project, allowing you to innovate and create something truly new."),(0,o.kt)("p",null,"If you have interesting ideas for smart contracts on Polkadot, feel free to drop\ninto the ",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadot-watercooler:matrix.org"},"Polkadot Watercooler")," to talk\nabout them. Developers may be interested in joining the\n",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#polkadotnoobs:matrix.org"},"Polkadot Beginners Lounge")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://area51.stackexchange.com/proposals/126136/substrate"},"Substrate Technical")," to ask their questions.\nAs always, keep up to date with Polkadot and Kusama by following the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/community"},"social channels"),"."),(0,o.kt)("p",null,"","","","",""),(0,o.kt)("p",null,"All the best."))}u.isMDXComponent=!0}}]);