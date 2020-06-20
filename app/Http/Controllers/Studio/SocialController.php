<?php

namespace App\Http\Controllers\Studio;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
class SocialController extends BaseController
{
    //
    public function index(){
        return '{}';
    }

    /**
     * Thanks to SO https://stackoverflow.com/questions/5081557/extract-jsonp-resultset-in-php
     */
    function jsonp_decode($jsonp, $assoc = false) { // PHP 5.3 adds depth as third parameter to json_decode
        if($jsonp[0] !== '[' && $jsonp[0] !== '{') { // we have JSONP
        $jsonp = substr($jsonp, strpos($jsonp, '('));
        }
        return json_decode(trim($jsonp,'();'), $assoc);
    }


    public function show(Request $request, string $slug)
    {
        $response = Http::get('http://twauth.snowmeister.co.uk/get_tweets.php?callback=tweets');        
        return response()->json($this->jsonp_decode($response->body(), false));
    }
}


