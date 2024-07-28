<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogPostResource;
use App\Http\Resources\CommentResource;
use App\Http\Resources\ServiceResource;
use App\Http\Resources\SocialMediaResource;
use App\Http\Resources\SubServiceResource;
use App\Http\Resources\UserResource;
use App\Models\BlogPost;
use App\Models\Comment;
use App\Models\Service;
use App\Models\SocialMedia;
use App\Models\SubService;
use App\Models\User;
use App\Models\Visitor;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class PagesController extends Controller
{
    function home(Request $request)
    {
        $visitorIp = $request->ip();
        $visitor = Visitor::firstorCreate(['ip' => $visitorIp]);
        $visitor->increment('requests');
        $social = SocialMedia::query()->get();
        $visitor->save();
        $baseUrl = url('/');       
        $blog = BlogPost::query()->latest()->paginate(3);
        $service = Service::query()->get();
        return inertia('Project/Home', [
            'baseUrl' => $baseUrl,
            "service" => ServiceResource::collection($service),
            'social' => SocialMediaResource::collection($social),            
            'post' => BlogPostResource::collection($blog),
            'success' => session('success')
        ]);
    }
    function service($slug)
    {
        $baseUrl = url('/');
        $service = Service::query()->get();
        $services = Service::query()->where('slug', $slug)->firstOrFail();
        $serviceId = $services->id;
        $sub = SubService::query()->where('service_id', $serviceId)->get();
        $social = SocialMedia::query()->get();        

        return inertia('Project/ServiceDetail', [
            'sub' => SubServiceResource::collection($sub),
            'services' => new ServiceResource($services),
            'baseUrl' => $baseUrl,            
            'social' => SocialMediaResource::collection($social),
            'service' => ServiceResource::collection($service),

        ]);
    }
    function about()
    {
        $baseUrl = url('/');
        $service = Service::query()->get();
        $social = SocialMedia::query()->get();
        $user = User::query()->where('isMember', 1)->get();
        return Inertia::render(
            'Project/About',
            [
                'baseUrl' => $baseUrl,
                "user" => UserResource::collection($user),
                'service' => ServiceResource::collection($service),
                'social' => SocialMediaResource::collection($social),
            ]
        );
    }
    function contact()
    {
        $baseUrl = url('/');
        $service = Service::query()->get();
        $social = SocialMedia::query()->get();
        return inertia('Project/Contact', [
            'baseUrl' => $baseUrl,
            'social' => SocialMediaResource::collection($social),
            'service' => ServiceResource::collection($service),
            'success' => session('success')
        ]);
    }
    function blog()
    {
        $baseUrl = url('/');
        $service = Service::query()->get();
        $blog = BlogPost::query()->latest()->get();
        $social = SocialMedia::query()->get();

        return inertia('Project/Blog', [
            'baseUrl' => $baseUrl,
            'service' => ServiceResource::collection($service),
            'post' => BlogPostResource::collection($blog),
            'social' => SocialMediaResource::collection($social),
        ]);
    }
    function post($slug)
    {
        $baseUrl = url('/');
        $service = Service::query()->get();
        $post = BlogPost::query()->where('slug', $slug)->firstOrFail();
        $posts = BlogPost::query()->latest()->take(6)->get();
        $social = SocialMedia::query()->get();
        $postId = $post->id;
        $comment = Comment::query()->where('post_id', $postId)->latest()->paginate(5);
        return inertia('Project/SinglePost', [
            'baseUrl' => $baseUrl,
            'social' => SocialMediaResource::collection($social),
            'service' => ServiceResource::collection($service),
            'post' => new BlogPostResource($post),
            'posts' => BlogPostResource::collection($posts),
            'comment' => CommentResource::collection($comment),
            'success' => session('success')
        ]);
    }

    function job()
    {
        $service = Service::query()->get();
        $baseUrl = url('/');
        $social = SocialMedia::query()->get();
        return inertia('Project/Job', [
            'success' => session('success'),
            'service' => ServiceResource::collection($service),
            'baseUrl' => $baseUrl,
            'social' => SocialMediaResource::collection($social),
        ]);
    }

}