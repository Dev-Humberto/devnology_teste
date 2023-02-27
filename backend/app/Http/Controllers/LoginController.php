<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function auth(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ],[
            'email.required' => 'O campo email é obrigatório',
            'email.email' => 'O email não é válido',
            'password.required' => 'O campo palavra-passe é obrigatório' 
        ]
    );

        if(Auth::attempt($credentials)){
            $request->session()->regenerate();
            return redirect()->intended('dashboard');
        }else{
            return redirect()->back()->with('erro', 'Credenciais incorretos');
        }


    }
}
