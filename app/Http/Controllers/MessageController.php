<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Http\Requests\JobApplicationRequest;
use App\Http\Requests\MessageRequest;
use App\Mail\CommentEmail;
use App\Mail\JobSent;
use App\Mail\MessageToCompany;
use App\Models\Comment;
use App\Models\JobApplication;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class MessageController extends Controller
{
    function message(MessageRequest $request)
    {
        $data = $request->validated();
        $data = Message::create($data);
        $mailto = 'info@jasonvisiontechnologies.com';
        $email = $data["email"];
        Mail::to($mailto)->send(new MessageToCompany($data));
        return to_route('home')->with('success', 'Your Message has been sent successfully');

    }
    function posting(CommentRequest $request, $slug)
    {
        $data = $request->validated();
        $data = Comment::create($data);
        $mailto = 'info@jasonvisiontechnologies.com';

        Mail::to($mailto)->send(new CommentEmail($data));
        return to_route('post', $slug)->with('success', "Comment Has been sent");
    }

    function apply(JobApplicationRequest $request)
    {
        /** @var $attachment \Illuminate\Http\UploadedFile */
        // dd($request);
        $data = $request->validated();

        $attachment = $data['attachment'] ?? null;
        if ($attachment) {
            $data['attachment'] = $attachment->store('cvfiles/', 'public');
        }
        $mailto = 'info@jasonvisiontechnologies.com';
        $data = JobApplication::create($data);
        Mail::to($mailto)->send(new JobSent($data));

        return to_route('job')->with('success', "Your Job Application has been received ssuceesiful, You will be contacted as soon as possible");
    }
}