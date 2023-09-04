<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Routing\Approval as ApprovalRouting;
use App\Models\Usulan\Approval as ApprovalUsulan;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        return User::paginate();
    }

    public function option()
    {
        return User::get();
    }

    public function show($uuid)
    {
        return User::firstWhere('uuid', $uuid);
    }

    public function store()
    {
        return $this->save();
    }

    public function update($uuid)
    {
        return $this->save($uuid);
    }

    public function save($uuid = null)
    {
        request()->validate([
            'fullname'  => 'required',
            'instansi_id'  => '',
            'username'  => !is_null($uuid) ? '' : 'required|unique:users',
            'phone'     => !is_null($uuid) ? '' : 'required|unique:users',
            'password'  =>  !is_null($uuid) ? 'confirmed' : 'required|confirmed',
            'level'     => 'required',
            'site'      => 'required',
            // 'email' => !is_null($uuid) ? '' : 'unique:users',
        ]);

        if (!is_null($uuid)) {
            $user = User::firstWhere('uuid', $uuid);
        } else {
            $user = new User;
        }

        $user->fullname     = request()->fullname;
        $user->username     = request()->username;
        $user->email        = request()->email;
        $user->phone        = request()->phone;
        $user->level        = request()->level;
        $user->instansi_id  = request()->instansi_id;
        $user->bidang_id    = request()->bidang_id;
        $user->jabatan_id   = request()->jabatan_id;
        $user->site         = request()->site;

        if (filled(request()->password)) {
            $user->password = bcrypt(request()->password);
        }

        $user->save();

        return $user;
    }

    public function destroy($uuid)
    {
        return User::firstWhere('uuid', $uuid)->delete();
    }

    public function notification()
    {
        $routing = ApprovalRouting::with('routing')->where('user_id', Auth::user()->id)->orderBy('created_at', 'DESC')->get();
        $data_routing = [];
        if($routing){
            $data_routing = $routing->toArray();
        }

        $usulan = ApprovalUsulan::with('usulan')->where('user_id', Auth::user()->id)->orderBy('created_at', 'DESC')->get();
        $data_usulan = [];
        if($usulan){
            $data_usulan = $usulan->toArray();
        }

        $result = array_merge($data_routing, $data_usulan);

        return $result;
    }
}
