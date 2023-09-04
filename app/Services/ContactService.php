<?php
namespace Services;

use App\Models\Contact;
use Illuminate\Support\Facades\Auth;

class ContactServices
{
    public function data()
    {
        return Contact::paginate();
    }

    public function store()
    {
        return Contact::create([
            'name'=> request()->name,
            'phone' => request()->phone,
            'email' => request()->email,
            'website' => request()->website,
            'message' => request()->message,
        ]);
    }

    public function update($uuid)
    {
        return Contact::firstWhere('uuid', $uuid)
            ->update([
                'name'=> request()->name,
                'phone' => request()->phone,
                'email' => request()->email,
                'website' => request()->website,
                'message' => request()->message,
            ]);
    }

    public function find($uuid)
    {
        return Contact::firstWhere('uuid', $uuid);
    }

    public function delete($uuid)
    {
        return Contact::firstWhere('uuid', $uuid)->delete();
    }
}
