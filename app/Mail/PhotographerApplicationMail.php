<?php

namespace App\Mail;

use App\Models\BookEvent;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PhotographerApplicationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $event; // The event for which the application is submitted
    public $photographer; // The photographer who applied

    /**
     * Create a new message instance.
     *
     * @param BookEvent $event
     * @param User $photographer
     */
    public function __construct(BookEvent $event, User $photographer)
    {
        $this->event = $event;
        $this->photographer = $photographer;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Photographer Application Received')
            ->view('emails.photographer_application');
    }
}
