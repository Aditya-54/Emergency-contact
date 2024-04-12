// Function to handle emergency button click
function handleEmergency() {
    // Call emergency services
    window.location.href = "tel:8450076426";
    // Get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            // Send latitude and longitude to emergency services (if supported)
            console.log("User's Location - Latitude: " + latitude + ", Longitude: " + longitude);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

// Function to handle emergency contact form submission
function addEmergencyContact(event) {
    event.preventDefault();
    var contactName = document.getElementById("contactName").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var relationship = document.getElementById("relationship").value;
    // Store contact information (you can implement this as needed)
    console.log("Contact Name: " + contactName + ", Contact Number: " + contactNumber + ", Relationship: " + relationship);
}

// Add event listeners
document.getElementById("emergencyButton").addEventListener("click", handleEmergency);
document.getElementById("emergencyContactForm").addEventListener("submit", addEmergencyContact);
