<?php
namespace Services;

use App\Models\Post\Category;
use Illuminate\Support\Facades\Auth;

class PostCategoryService
{
    public function data()
    {
        return Category::paginate();
    }

    public function store()
    {
        return Category::create([
            'name' => request()->name,
            'slug' => '-',
            'status' => request()->status,
        ]);
    }

    public function update($uuid)
    {
        return Category::firstWhere('uuid', $uuid)
            ->update([
                'name' => request()->name,
                'status' => request()->status,
            ]);
    }

    public function find($uuid)
    {
        return Category::firstWhere('uuid', $uuid);
    }

    public function delete($uuid)
    {
        return Category::firstWhere('uuid', $uuid)->delete();
    }
}
