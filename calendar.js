// calendar.js

// Function to render the calendar for a given month and year
function renderCalendar(year, month) {
    const calendar = document.createElement('table');
    const header = calendar.createTHead();
    const body = calendar.createTBody();

    // Add month and year header
    const monthYearHeader = header.insertRow();
    monthYearHeader.colSpan = 7;
    monthYearHeader.innerText = `${getMonthName(month)} ${year}`;

    // Add days of the week header
    const daysHeader = header.insertRow();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const cell = daysHeader.insertCell();
        cell.innerText = day;
    });

    // Get first day of the month and total days
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Fill calendar with empty cells for days before the first of the month
    let row = body.insertRow();
    for (let i = 0; i < firstDay; i++) {
        row.insertCell();
    }

    // Fill in the days of the month
    for (let day = 1; day <= totalDays; day++) {
        if ((firstDay + day - 1) % 7 === 0) {
            row = body.insertRow();
        }
        const cell = row.insertCell();
        cell.innerText = day;
    }

    document.body.appendChild(calendar);
}

// Function to get month name
function getMonthName(month) {
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
}

// Coptic Calendar conversion functions
function getCopticDate(date) {
    // Conversion logic to Coptic Calendar
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    // Implement logic to convert Gregorian date to Coptic
    const copticDate = convertToCoptic(year, month, day);
    return copticDate;
}

function convertToCoptic(year, month, day) {
    // Placeholder function for the conversion logic
    // This function should return an object with the Coptic year, month, and day
    return { copticYear: year, copticMonth: month, copticDay: day };
}