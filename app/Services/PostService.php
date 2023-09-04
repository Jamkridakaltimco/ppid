<?php
namespace Services;

use App\Models\Post\Post;
use Illuminate\Support\Facades\Auth;

class PostService
{
    public function data()
    {
        $type = request()->get('type')?:'Static';

        return Post::where('type', $type)->paginate();
    }

    public function store()
    {
        return Post::create([
            'title' => request()->title,
            'slug' => '-',
            'tags' => request()->tags,
            'content' => request()->content,
            'type' => request()->type,
            'category_id' => request()->category_id,
            'status' => request()->status,
            'read' => request()->read,
            'published_at' => now(),
        ]);
    }

    public function update($uuid)
    {
        return Post::firstWhere('uuid', $uuid)
            ->update([
                'title' => request()->title,
                'tags' => request()->tags,
                'content' => request()->content,
                'type' => request()->type,
                'status' => request()->status,
            ]);
    }

    public function find($uuid)
    {
        return Post::with('category')->firstWhere('uuid', $uuid);
    }

    public function delete($uuid)
    {
        return Post::firstWhere('uuid', $uuid)->delete();
    }
}
