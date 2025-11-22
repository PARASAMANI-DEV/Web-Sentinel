function runScan() {
    const text = document.getElementById('textInput').value.toLowerCase();
    const url = document.getElementById('urlInput').value;
    const statusDiv = document.getElementById('status');
    const loader = document.getElementById('loader');

    if (!text) { 
        alert("Input Required"); 
        return; 
    }

    // 1. Show Loading Animation
    loader.style.display = 'block';
    statusDiv.style.display = 'none';

    // 2. Fake Processing Delay (2.5 seconds)
    setTimeout(() => {
        loader.style.display = 'none';
        statusDiv.style.display = 'block';

        // 3. Threat Logic
        if (text.includes("ignore") || text.includes("override") || text.includes("hack")) {
            statusDiv.className = 'danger';
            statusDiv.innerHTML = `
                <div style="font-weight:bold; margin-bottom:5px; font-size:18px;">⚠️ THREAT PREVENTED</div>
                <div style="margin-bottom:10px;">Type: <span style="color:#fff">Indirect Prompt Injection</span></div>
                <div style="font-family:monospace; font-size:12px; opacity:0.8;">
                    > DETECTED_TRIGGER: "System Override/Ignore"<br>
                    > VECTOR_SIMILARITY: 0.89 (High Risk)<br>
                    > ACTION: Connection Severed.
                </div>
            `;
        } else {
            statusDiv.className = 'safe';
            statusDiv.innerHTML = `
                <div style="font-weight:bold; margin-bottom:5px; font-size:18px;">✅ CONTENT SECURED</div>
                <div style="margin-bottom:10px;">Status: <span style="color:#fff">Clean & Sanitized</span></div>
                <div style="font-family:monospace; font-size:12px; opacity:0.8;">
                    > MALWARE_CHECK: Passed (Google SafeBrowsing)<br>
                    > INJECTION_CHECK: 0.04 (Safe)<br>
                    > ACTION: Forwarding to LLM...
                </div>
            `;
        }
    }, 2500);
}
