// 1. Calculadora de Juros Compostos
function calculateCompoundInterest() {
    const initial = parseFloat(document.getElementById('initial').value) || 0;
    const monthly = parseFloat(document.getElementById('monthly').value) || 0;
    const annualRate = parseFloat(document.getElementById('rate').value) || 0;
    const years = parseInt(document.getElementById('years').value) || 0;

    const months = years * 12;
    const monthlyRate = (Math.pow(1 + (annualRate / 100), 1 / 12)) - 1;

    let totalAccumulated = initial;
    let totalInvested = initial;

    for (let i = 0; i < months; i++) {
        totalAccumulated += monthly;
        totalAccumulated *= (1 + monthlyRate);
        totalInvested += monthly;
    }

    const totalInterest = totalAccumulated - totalInvested;

    const fmt = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('resultCompound').innerHTML = `
        <div style="font-size: 0.9rem; line-height: 1.8;">
            Total Acumulado: <strong style="color: #D4AF37; font-size: 1.2rem;">${fmt.format(totalAccumulated)}</strong><br>
            Total Investido: ${fmt.format(totalInvested)}<br>
            Rendimento em Juros: <span style="color: #0B5FFF; font-weight: bold;">${fmt.format(totalInterest)}</span>
        </div>
    `;
}

// 2. Calculadora de Reserva de Emergência
function calculateEmergencyFund() {
    const monthlyCost = parseFloat(document.getElementById('monthlyCost').value) || 0;
    const months = parseInt(document.getElementById('monthsCoverage').value) || 6;

    const totalReserve = monthlyCost * months;
    const fmt = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('resultEmergency').innerHTML = `
        <div style="font-size: 0.9rem; line-height: 1.8;">
            Sua Reserva Ideal: <strong style="color: #D4AF37; font-size: 1.2rem;">${fmt.format(totalReserve)}</strong><br>
            <small style="color: #94a3b8;">Garante seu padrão de vida por <strong>${months} meses</strong> sem renda.</small>
        </div>
    `;
}