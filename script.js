// Function to filter table rows based on search input
function searchTable() {
    const input = document.getElementById('search-bar');
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll('#table-body tr');

    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        let match = false;

        // Loop through each cell in the row
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            if (cell && cell.textContent.toLowerCase().indexOf(filter) > -1) {
                match = true;
                break; // No need to check further cells if one is matched
            }
        }

        // Show or hide row based on whether it matches the search
        if (match) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Function to dynamically load table content
fetch('table-content.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('table-body').innerHTML = data;
    })
    .catch(error => console.error('Error loading table content:', error));

// Open external reputation checks in new tabs for IPs
function openAbuseIPDB() {
    const ip = document.getElementById('inputField').value;
    window.open(`https://www.abuseipdb.com/check/${ip}`, '_blank');
}

function openAlienVault() {
    const ip = document.getElementById('inputField').value;
    window.open(`https://otx.alienvault.com/indicator/ip/${ip}`, '_blank');
}

function openTalos() {
    const ip = document.getElementById('inputField').value;
    window.open(`https://www.talosintelligence.com/reputation_center/lookup?search=${ip}`, '_blank');
}

// Handle domain reputation functions
function openAbuseIPDBDomain() {
    const domain = document.getElementById('inputField').value;
    window.open(`https://www.abuseipdb.com/check/${domain}`, '_blank');
}

function openAlienVaultDomain() {
    const domain = document.getElementById('inputField').value;
    window.open(`https://otx.alienvault.com/indicator/domain/${domain}`, '_blank');
}

function openTalosDomain() {
    const domain = document.getElementById('inputField').value;
    window.open(`https://www.talosintelligence.com/reputation_center/lookup?search=${domain}`, '_blank');
}

function openThreatMiner() {
    const domain = document.getElementById('inputField').value;
    window.open(`https://www.threatminer.org/host.php?q=${domain}`, '_blank');
}

function openVirusTotal() {
    const domain = document.getElementById('inputField').value;
    window.open(`https://www.virustotal.com/gui/domain/${domain}/detection`, '_blank');
}

function openBluecoat() {
    const domain = document.getElementById('inputField').value;
    window.open(`https://sitereview.bluecoat.com/#/url/${domain}`, '_blank');
}

function openWebCheck() {
    const domain = document.getElementById('inputField').value;
    window.open(`https://www.webcheck.com/check/${domain}`, '_blank');
}

// External reputation buttons
function openReputation() {
    const domain = document.getElementById('inputField').value;
    window.open(`https://www.abuseipdb.com/check/${domain}`, '_blank');
}

// SSL and Certificate Categories
function openSSLTest() {
    const domain = document.getElementById('inputField').value;
    window.open(`https://www.ssllabs.com/ssltest/analyze.html?d=${domain}`, '_blank');
}

function openCRT() {
    const domain = document.getElementById('inputField').value;
    window.open(`https://crt.sh/?q=${domain}`, '_blank');
}
