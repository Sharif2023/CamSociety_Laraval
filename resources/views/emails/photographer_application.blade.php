<!DOCTYPE html>
<html>
<head>
    <title>Photographer Application Received</title>
</head>
<body>
    <h2>New Photographer Application for Your Event</h2>
    
    <p>Dear {{ $event->creator->name }},</p>
    
    <p>You have received a new application for your event:</p>
    <ul>
        <li><strong>Event Name:</strong> {{ $event->event_name }}</li>
        <li><strong>Date:</strong> {{ $event->start_date }} - {{ $event->end_date }}</li>
        <li><strong>Location:</strong> {{ $event->address }}</li>
    </ul>

    <p><strong>Photographer Details:</strong></p>
    <ul>
        <li><strong>Name:</strong> {{ $photographer->name }}</li>
        <li><strong>Email:</strong> {{ $photographer->email }}</li>
        <li><strong>Phone:</strong> {{ $photographer->phone ?? 'N/A' }}</li>
    </ul>

    <p>To view more details, log in to your account on the platform.</p>
    
    <p>Thank you, <br>CamSocity Team</p>
</body>
</html>
