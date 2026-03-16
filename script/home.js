let currentTab = "all";
const tabActive = ["bg-[#4A00FF]", "text-white", "border-none"];
const tabInactive = ["bg-white", "text-[#64748B]", "border-[#E4E4E7]" ];

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

    }
}

switchTab(currentTab);

const loadIssue = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
    });
};




