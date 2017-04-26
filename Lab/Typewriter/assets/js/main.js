
var prompt = [  "an animal that Patrick is -press Key D",
                "an animal with white circles and a sharp tail -press Key E",
                "a fish that is orange and white. Well known for the movie Nemo -press Key F",
                "and crustacean that is Mr. Krabs -press Key G",
                "an animal that is similar to an octopus -press Key H",
                "an animal with 8 tentacles -press Key I",
                "a souvenir you find on the sand at the beach -press Key J",
                "a sociable animal with a small snout -press Key K",
                "an animal you wouldn't like to swim especially if you are bleeding -press Key L",
                "a fish that puffs -press Key M",
                "an animal SpongeBob likes to capture-press Key N",
                "the bird of the sea -press Key O",
                "the biggest whale of the ocean -press Key P",
                "a vessel that keeps you afloat the water -press Key Q",
                "a device shaped like a donut, and saves lives -press Key R",
                "a red crustacean considered a fancy meal -press Key S",
                "The New School's mascot -press Key T",
                "a device found in a boat that can be dropped to prevent motion -press Key U",
                "a cylinder building that navigates the boats at night -press Key V", 
                "a black sea snake -press Key W",
                "a green sea plant -press Key X",
                "a white and black whale -press Key Y",
                "the dog of the sea -press Key Z"

]

function newIspy() {
    var randomNumber = Math.floor(Math.random() * (prompt.length));

    document.getElementById('prompt').innerHTML = ("I Spy " + prompt[randomNumber]);

}

var container = document.getElementById('container');

var letters = {
    KeyA: {
        url: "assets/media/a_turtle.png",
        id: "turtle"
    },
    KeyB: {
        url: "assets/media/b_seahorse.png",
        id: "seahorse"
    },
    KeyC: {
        url: "assets/media/c_blue-coral.png",
        id: "blue-coral"
    },
    KeyD: {
        url: "assets/media/d_starfish.png",
        id: "starfish"
    },
    KeyE: {
        url: "assets/media/e_ray.png",
        id: "ray"
    },
    KeyF: {
        url: "assets/media/f_clownfish.png",
        id: "clownfish"
    },
    KeyG: {
        url: "assets/media/g_crab.png",
        id: "crab"
    },
    KeyH: {
        url: "assets/media/h_squid.png",
        id: "squid"
    },
    KeyI: {
        url: "assets/media/i_octo.png",
        id: "octo"
    },
    KeyJ: {
        url: "assets/media/j_shell.png",
        id: "shell"
    },
    KeyK: {
        url: "assets/media/k_dolphin.png",
        id: "dolphin"
    },
    KeyL: {
        url: "assets/media/l_shark.png",
        id: "shark"
    },
    KeyM: {
        url: "assets/media/m_puff.png",
        id: "puff"
    },
    KeyN: {
        url: "assets/media/n_jelly.png",
        id: "jelly"
    },
    KeyO: {
        url: "assets/media/o_seagull.png",
        id: "seagull"
    },
    KeyP: {
        url: "assets/media/p_bwhale.png",
        id: "b-whale"
    },
    KeyQ: {
        url: "assets/media/q_boat.png",
        id: "boat"
    },
    KeyR: {
        url: "assets/media/r_lifesaver.png",
        id: "lifesaver"
    },
    KeyS: {
        url: "assets/media/s_lobster.png",
        id: "lobster"
    },
    KeyT: {
        url: "assets/media/t_narwhal.png",
        id: "narwhal"
    },
    KeyU: {
        url: "assets/media/u_anchor.png",
        id: "anchor"
    },
    KeyV: {
        url: "assets/media/v_lighthouse.png",
        id: "lighhouse"
    },
    KeyW: {
        url: "assets/media/w_eel.png",
        id: "eel"
    },
    KeyX: {
        url: "assets/media/x_seaweed.png",
        id: "seaweed"
    },
    KeyY: {
        url: "assets/media/y_killerwhale.png",
        id: "killerwhale"
    },
    KeyZ: {
        url: "assets/media/z_seal.png",
        id: "seal"
    }
};

for (key in letters) {
    var img = document.createElement('img');
    img.src = letters[key].url;
    img.id = letters[key].id;
    container.appendChild(img);
};

document.addEventListener("keydown", function(event) {
    
    if (event.keyCode >= 65 && event.keyCode <=90) {
        //console.log(event.code);
        //console.log(letters.KeyX.id);
        // console.log(letters[event.code].id);
        var img = document.getElementById(letters[event.code].id);
        container.removeChild(img);
    }
});















