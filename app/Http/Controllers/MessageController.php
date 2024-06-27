<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Http\Requests\JobApplicationRequest;
use App\Http\Requests\MessageRequest;
use App\Mail\CommentEmail;
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
        $mailto = 'joshuajayrous@gmail.com';
        $email = $data["email"];
        // dd($data);
        Mail::to($mailto)->send(new MessageToCompany($data));
        return to_route('contact')->with('success', 'Your Message has Been received');

    }
    function posting(CommentRequest $request, $slug)
    {
        $data = $request->validated();
        $data = Comment::create($data);
        $mailto = 'joshuajayrous@gmail.com';

        Mail::to($mailto)->send(new CommentEmail($data));
        return to_route('post', $slug)->with('success', "Comment Has been sent");
    }

    function apply(JobApplicationRequest $request)
    {
        /** @var $attachment \Illuminate\Http\UploadedFile */
        // dd($request);
        $data = $request->validated();

        $attachment = $data['attachment'] ?? null;
        $email = $data['email'];
        if ($attachment) {
            $data['attachment'] = $attachment->store('cvfiles/', 'public');
        }
        // dd($attachment . $email);
        JobApplication::create($data);
        // dd($data);
        return to_route('job')->with('success', "Your Job Application has been received ssuceesiful, You will be contacted as soon as possible");
    }
}