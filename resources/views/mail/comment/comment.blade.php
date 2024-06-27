<x-mail::message>
# New Comment from {{$name}}
<x-mail::panel>
<h3>Comment Data</h3> <br>
<strong>Comment Content</strong> {{$content}} <br>
</x-mail::panel>
<x-mail::panel>
<h3>Sender Details</h3> <br>
<strong>Name:</strong> {{$name}} <br>
<strong>Email:</strong> {{$email}} <br>
<strong>Phone:</strong> {{$phone}} <br>
<strong>Organization:</strong> {{$organization}} <br>
<strong>Position:</strong> {{$position}} <br>
</x-mail::panel>
<x-mail::button :url="'https://thefamilypool.com/admin/comments?tableSearch={{$email}}'">
For more details
</x-mail::button>
 Thanks,<br>
 Abel Mr, CEO <br>
 {{ config('app.name') }}
</x-mail::message>