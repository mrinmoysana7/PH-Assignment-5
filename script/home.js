// let currentTab = "all";
// const tabActive = ["bg-[#4A00FF]", "text-white", "border-none"];
// const tabInactive = ["bg-white", "text-[#64748B]", "border-[#E4E4E7]" ];

// function switchTab (tab) {
//     const allTabs = ["all", "open", "closed"];
//     currentTab = tab;
//     for(const t of allTabs){
//         const tabName = document.getElementById("tab-" + t);
//         if(t === tab){
//             tabName.classList.remove(...tabInactive);
//             tabName.classList.add(...tabActive);
//         } else {
//             tabName.classList.remove(...tabActive);
//             tabName.classList.add(...tabInactive);
//         }

//     }
// }

// switchTab(currentTab);

// const loadIssue = () => {
//     const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) =>{
//         displayIssues(data.data);
//     });
// };

// const displayIssues = (issues) => {
//     const issueContainer = document.getElementById("issue-container");
//     issueContainer.innerHTML = "";
    
//     issues.forEach((issu) => {
        
        
//         const createDiv = document.createElement("div");
//         createDiv.setAttribute("onclick", `loadModal(${issu.id})`);
//         createDiv.classList.add("cursor-pointer");
//         createDiv.innerHTML = `
//         <div class=" shadow-lg h-full rounded-md border-t-2 border-[#00A96E] px-4 pt-4 space-y-3 ">

//             <div class="flex items-center justify-between">
//                 <img class="" src="./B13-A5-Github-Issue-Tracker/assets/Open-Status.png" alt="">
//                 <div id="priority-box">
//                 <p class="font-medium text-[12px] text-center rounded-full w-[80px] py-1 px-6 bg-[#FEECEC]
//                 ">${issu.priority}</p>
//                 </div>
//             </div>

//             <div>
//                 <h2 class="text-[17px] font-bold text-[#1F2937] mb-3">${issu.title}</h2>
//                 <p class="text-[#64748B] text-[12px]">${issu.description}</p>
//             </div>   
                    
//             <div class="flex flex-wrap gap-1">
//                 <div class="">
//                     <div class="flex"><p class="border-2 text-[#EF4444] border-[#FECACA] font-medium text-[12px] rounded-full py-1 px-2 bg-[#FEECEC]
//                     "><i class="fa-solid fa-bug" style="color: #EF4444;"></i> ${issu.labels[0]}</p></div>
//                 </div>
//                 <div>
//                     <div class="flex"><p class="border-2 border-[#FDE68A] font-medium text-[12px] text-[#D97706] rounded-full py-1 px-2 bg-[#FFF8DB]
//                     "><i class="fa-regular fa-life-ring" style="color: #D97706;"></i> ${issu.labels[1] ? issu.labels[1] : "No Help"} </p></div>
//                 </div>
//                 <div class="hidden">
//                     <div class="flex"><p class="border-2 font-medium text-[12px] rounded-full py-1 px-2 bg-[#FEECEC]
//                     "><i class="fa-duotone fa-solid fa-wand-magic-sparkles" style="--fa-primary-color: rgb(113, 72, 233); --fa-secondary-color: rgb(113, 72, 233);"></i> Enhancement</p></div>
//                 </div>
//             </div> 

    
//             <div class="grid grid-cols-2 gap-0 py-4 border-t-2 mt- border-gray-300 space-y-4">
//                 <div class="text-start">
//                     <p class="pb-2 text-gray-400 text-xs font-bold">${issu.author}</p>
//                     <p class="text-gray-400 text-xs font-bold">${issu.createdAt}</p>
//                 </div>
//                 <div class="text-end">
//                     <p class="pb-2 text-gray-400 text-xs font-bold">${issu.assignee ? issu.assignee : "sorry"}</p>
//                     <p class="text-gray-400 text-xs font-bold">${issu.updatedAt}</p>
//                 </div>
//             </div>
//         </div>
        
//         `
//        issueContainer.append(createDiv);
//     });


// }; 

// const loadModal = async (id) => {
//     const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
//     const res = await fetch(url);
//     const details = await res.json();
//     displayModalIssue(details.data);
// };

// const displayModalIssue = (modal) => {
//     const modalContainer = document.getElementById("display_modal");
//     modalContainer.innerHTML = `

        

//         <h4 class="font-bold text-[24px] text-[#1F2937] mb-2">${modal.title}</h4>
//             <div class="flex items-center space-x-2 mb-5">                
//                 <div class="bg-[#00A96E] rounded-2xl text-white py-1.5 px-2.5 text-[12px] font-medium">${modal.status}</div>  
//                 <p class="text-[#64748B] text-[14px]">• Opened by ${modal.author} •</p>
//                 <p class="text-[#64748B] text-[14px]">22/02/2026</p>
//             </div>
            
//             <div>
//                 <div class="flex flex-wrap gap-1 mb-5">
//                 <div class="">
//                     <div class="flex"><p class="border-2 text-[#EF4444] border-[#FECACA] font-medium text-[12px] rounded-full py-1 px-2 bg-[#FEECEC]
//                     "><i class="fa-solid fa-bug" style="color: #EF4444;"></i> ${modal.labels[0]}</p></div>
//                 </div>
//                 <div>
//                     <div class="flex"><p class="border-2 border-[#FDE68A] font-medium text-[12px] text-[#D97706] rounded-full py-1 px-2 bg-[#FFF8DB]
//                     "><i class="fa-regular fa-life-ring" style="color: #D97706;"></i> ${modal.labels[1] ? modal.labels[1] : "No Help"} </p></div>
//                 </div>
//                 </div>

//                 <div>
//                     <p class="text-[15px] text-[#64748B]">${modal.description}</p>
//                 </div>

//             </div>
            
//             <div class="grid grid-cols-2 my-6 bg-[#F8FAFC] p-4 gap-2.5 rounded-lg">

//                  <div class="text-start">
//                  <p class="text-[16px] text-[#64748B] mb-1">Assignee:</p>
//                  <p class="font-semibold text-[16px] text-[#1F2937]">${modal.author}</P>
//                  </div>

//                  <div class="text-end">
//                  <p class="text-[16px] text-start text-[#64748B] mb-1">Priority:</p>
//                  <p class="font-medium text-[12px] text-center rounded-full w-[35%] py-1 bg-[#FEECEC]
//                 ">${modal.priority}</p>
//                  </div>
            
//             </div>
            
//         </div>
//         </div> 
        
    
    
//     `;

//     document.getElementById("issue_modal").showModal();
    


// };

// loadIssue();

// document.getElementById("search-btn").addEventListener("click", () => {
//     const getInput = document.getElementById("search-Input");
//     const inputValue = getInput.value.trim().toLowerCase();
    
//     const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${inputValue}`;
//     console.log(url);
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         const allIssue = data.data || [];

            
//             const filteredIssues = allIssue.filter(issue =>
//                 issue.title.toLowerCase().includes(inputValue)
//             );

            
//             displayIssues(filteredIssues);
        
//         });
     

//     });



let currentTab = "all";
let allIssues = [];

const tabActive = ["bg-[#4A00FF]", "text-white", "border-none"];
const tabInactive = ["bg-white", "text-[#64748B]", "border-[#E4E4E7]" ];

const manageSpinner = (status) => {
    if(status === true){
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("issue-container").classList.add("hidden");
    } else {
        document.getElementById("issue-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }
};


function switchTab (tab) {
    const allTabs = ["all", "open", "closed"];
    currentTab = tab;

    for(const t of allTabs){
        
        const tabName = document.getElementById("tab-" + t);
        if(t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        } else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
        manageSpinner(false);
        

    }

    displayIssues(allIssues);
}


const loadIssue = () => {
    manageSpinner(true);
    
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues`)
        .then((res) => res.json())
        .then((data) => {
            allIssues = data.data;
            // setTimeout(() => {
                switchTab(currentTab);
                manageSpinner(false);
            // }, 500);
        })
        // .catch(err => {
        //     console.error(err);
        //     manageSpinner(false);
        // });
};

const displayIssues = (issues) => {
    const issueContainer = document.getElementById("issue-container");
    issueContainer.innerHTML = "";

    let filtered = issues;

    if(currentTab === "open"){
        filtered = issues.filter(issue => issue.status === "open");
    } else if(currentTab === "closed"){
        filtered = issues.filter(issue => issue.status === "closed")
    }

    document.getElementById("count-issues").innerText = filtered.length;

    filtered.forEach((issu) => {
        // console.log(issu);
        let borderColor = "";
        let statusIcon = "";

        if (issu.status === "open") {
            borderColor = "border-[#00A96E]";
            statusIcon = `<img src="./B13-A5-Github-Issue-Tracker/assets/Open-Status.png" alt="">`;

        } else {
            borderColor = "border-purple-500";
            statusIcon = `<img src="./B13-A5-Github-Issue-Tracker/assets/Closed-Status.png" alt="">`;
        }
        
        const createDiv = document.createElement("div");
        createDiv.setAttribute("onclick", `loadModal(${issu.id})`);
        createDiv.classList.add("cursor-pointer");
        
        createDiv.innerHTML = `
        <div class=" shadow-lg h-full rounded-md border-t-2 ${borderColor} px-4 pt-4 space-y-3 ">

            <div class="flex items-center justify-between">
                  
                <p class="font-medium text-[12px] text-center rounded-full w-[80px] py-1 px-6 bg-[#FEECEC]
                ">${issu.priority}
                </p>
                
            </div>

            <div>
                <h2 class="text-[17px] font-bold text-[#1F2937] mb-3">${issu.title}</h2>
                <p class="text-[#64748B] text-[12px]">${issu.description}</p>
            </div>   
                    
            <div class="flex flex-wrap gap-1">
                <p class="border-2 text-[#EF4444] border-[#FECACA] text-[12px] rounded-full py-1 px-2 bg-[#FEECEC]">
                    ${issu.labels[0]}
                </p>
                <p class="border-2 border-[#FDE68A] text-[12px] text-[#D97706] rounded-full py-1 px-2 bg-[#FFF8DB]">
                    ${issu.labels[1] ? issu.labels[1] : "No Help"}
                </p>
            </div> 

    
            <div class="grid grid-cols-2 gap-0 py-4 border-t-2 mt-4 border-gray-300 space-y-4">
                <div class="text-start">
                    <p class="pb-2 text-gray-400 text-xs font-bold">${issu.author}</p>
                    <p class="text-gray-400 text-xs font-bold">${issu.createdAt}</p>
                </div>
                <div class="text-end">
                    <p class="pb-2 text-gray-400 text-xs font-bold">${issu.assignee || "N/A"}</p>
                    <p class="text-gray-400 text-xs font-bold">${issu.updatedAt}</p>
                </div>
            </div>
        </div>
        
        `;

       issueContainer.append(createDiv);
    });


}; 

const loadModal = async (id) => {
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);   
    const details = await res.json();
    displayModalIssue(details.data);
};

const displayModalIssue = (modal) => {
    const modalContainer = document.getElementById("display_modal");


    modalContainer.innerHTML = `
       <h4 class="font-bold text-[24px] text-[#1F2937] mb-2">${modal.title}</h4>
            <div class="flex items-center space-x-2 mb-5">                
                <div class="bg-[#00A96E] rounded-2xl text-white py-1.5 px-2.5 text-[12px] font-medium">${modal.status}</div>  
                <p class="text-[#64748B] text-[14px]">• Opened by ${modal.author} •</p>
                <p class="text-[#64748B] text-[14px]">22/02/2026</p>
            </div>
            
            <div>
                <div class="flex flex-wrap gap-1 mb-5">
                <div class="">
                    <div class="flex"><p class="border-2 text-[#EF4444] border-[#FECACA] font-medium text-[12px] rounded-full py-1 px-2 bg-[#FEECEC]
                    "><i class="fa-solid fa-bug" style="color: #EF4444;"></i> ${modal.labels[0]}</p></div>
                </div>
                <div>
                    <div class="flex"><p class="border-2 border-[#FDE68A] font-medium text-[12px] text-[#D97706] rounded-full py-1 px-2 bg-[#FFF8DB]
                    "><i class="fa-regular fa-life-ring" style="color: #D97706;"></i> ${modal.labels[1] ? modal.labels[1] : "No Help"} </p></div>
                </div>
                </div>

                <div>
                    <p class="text-[15px] text-[#64748B]">${modal.description}</p>
                </div>

            </div>
            
            <div class="grid grid-cols-2 my-6 bg-[#F8FAFC] p-4 gap-2.5 rounded-lg">

                 <div class="text-start">
                 <p class="text-[16px] text-[#64748B] mb-1">Assignee:</p>
                 <p class="font-semibold text-[16px] text-[#1F2937]">${modal.author}</P>
                 </div>

                 <div class="text-end">
                 <p class="text-[16px] text-start text-[#64748B] mb-1">Priority:</p>
                 <p class="font-medium text-[12px] text-center rounded-full w-[35%] py-1 bg-[#FEECEC]
                ">${modal.priority}</p>
                 </div>
            
            </div>
            
        </div>
        </div> 
        
    
    
    `;

    document.getElementById("issue_modal").showModal();
    


};


document.getElementById("search-btn").addEventListener("click", () => {
    const inputValue = document.getElementById("search-Input").value.trim().toLowerCase();
            
            const filtered = allIssues.filter(issue =>
        issue.title.toLowerCase().includes(inputValue)
    );

        displayIssues(filtered);
        
    });
    
loadIssue();


// https://phi-lab-server.vercel.app/api/v1/lab/issues

// "status": "success",
// "message": "Issues fetched successfully",
// "data": [
// {
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open", DUE???
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// },


