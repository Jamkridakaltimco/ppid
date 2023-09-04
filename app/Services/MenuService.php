<?php
namespace Services;

use App\Models\Menu;
use Illuminate\Support\Facades\Auth;

class MenuService
{
    public function data()
    {
        // $parent = request()->get('parent')?:null;
        $parent_id = request()->get('parent_id')?:null;
        if(is_null($parent_id)){
            return Menu::whereNull('parent_id')->paginate();
        }else{
            return Menu::where('parent_id', $parent_id)->paginate();
        }
    }

    public function store()
    {
        return Menu::create([
            'name' => request()->name,
            'slug' => '-',
            'link' => request()->link,
            'parent_id' => request()->parent_id,
            'position' => request()->position,
            'order' => request()->order,
            'status' => request()->status,
            'lock' => 0,
        ]);
    }

    public function update($uuid)
    {
        return Menu::firstWhere('uuid', $uuid)
            ->update([
                'name' => request()->name,
                'link' => request()->link,
                'parent_id' => request()->parent_id,
                'position' => request()->position,
                'order' => request()->order,
                'status' => request()->status,
            ]);
    }

    public function find($uuid)
    {
        return Menu::firstWhere('uuid', $uuid);
    }

    public function delete($uuid)
    {
        return Menu::firstWhere('uuid', $uuid)->delete();
    }
}
