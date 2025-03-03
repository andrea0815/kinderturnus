document.addEventListener("DOMContentLoaded", function () {
    const panels = document.querySelectorAll(".accordion-container");
    console.log(panels);
    

    panels.forEach((panel) => {
        const header = panel.querySelector('.accordion-header');
        const content = panel.querySelector('.accordion-content');

        header.addEventListener("click", function () {
            
            // Close all other answers
            document.querySelectorAll(".accordion-content").forEach((p) => {
                console.log(p);
                
                if (p !== content) {
                    p.style.maxHeight = null;
                }
            });

            // Toggle the clicked answer
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                panel.querySelector('.arrow').classList.remove('down');
                panel.querySelector('.arrow').classList.add('right');
            } else {
                panel.querySelector('.arrow').classList.add('down');
                panel.querySelector('.arrow').classList.remove('right');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
