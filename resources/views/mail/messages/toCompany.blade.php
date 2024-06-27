<x-mail::message>
# New Message Received

<x-mail::panel>
<strong>Service from</strong> {{$name}} <br>
<strong>Email:</strong> {{$email}}. <br>
<strong>Phone</strong>: {{$subject}}. <br>
</x-mail::panel>
<x-mail::panel>
<strong>Message:</strong> {{$content}}.
</x-mail::panel>
<x-mail::button :url="'https://thefamilypool.com/admin/service-requests?tableSearch={{$email}}'">
For more details
</x-mail::button>
Thanks,<br>
Abel Mr, CEO <br>
{{ config('app.name') }}
</x-mail::message>