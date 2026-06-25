document.addEventListener('DOMContentLoaded', () => {
    const runBtn = document.getElementById('run-scraper-btn');
    const outputContainer = document.getElementById('terminal-output');

    const logs = [
        "axlawn@github-engine:~$ python3 web-scrap/bs4_parser.py",
        "[INFO] Initializing BeautifulSoup Crawler Environment...",
        "[INFO] Targeting Local Target File System asset: ./web-scrap/raw-target-mock.html",
        "[SUCCESS] Extraction Source Loaded Stream Status: 200 OK",
        "[PARSING] Mapping structural tree and searching for structural selectors: '.product-card'...",
        "[EXTRACTING] Processing elements: Item data mapping initiated.",
        "[SUCCESS] 3/3 target records successfully isolated and structured."
    ];

    const finalJsonOutput = `[\n  {\n    "title": "Cyberpunk Neon Mechanical Keyboard",\n    "price": "$129.99"\n  },\n  {\n    "title": "Retro Matrix HUD Sunglasses",\n    "price": "$45.00"\n  },\n  {\n    "title": "Neural Link Dev Kit v2",\n    "price": "$899.00"\n  }\n]`;

    runBtn.addEventListener('click', () => {
        // Reset terminal screen on click
        outputContainer.innerHTML = '';
        runBtn.disabled = true;
        runBtn.innerText = "RUNNING...";

        let logIndex = 0;

        function printLog() {
            if (logIndex < logs.length) {
                const p = document.createElement('p');
                p.textContent = logs[logIndex];
                outputContainer.appendChild(p);
                logIndex++;
                setTimeout(printLog, 600); // 600ms gap between steps
            } else {
                // Print the final JSON payload safely with spacing
                setTimeout(() => {
                    const pre = document.createElement('pre');
                    pre.style.color = '#00ffcc';
                    pre.style.marginTop = '10px';
                    pre.textContent = finalJsonOutput;
                    outputContainer.appendChild(pre);

                    // Add complete statement and blinking cursor back
                    const endPara = document.createElement('p');
                    endPara.innerHTML = 'axlawn@github-engine:~$ <span class="cursor"></span>';
                    outputContainer.appendChild(endPara);

                    // Re-enable button
                    runBtn.disabled = false;
                    runBtn.innerText = "RUN SCRAPER";
                }, 400);
            }
            // Auto-scroll terminal downward
            outputContainer.scrollTop = outputContainer.scrollHeight;
        }

        printLog();
    });
});
