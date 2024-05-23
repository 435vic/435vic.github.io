{
  description = "boredvico.dev dev - nodejs, rust, wasm-pack support";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in rec {
        devShells.default = pkgs.mkShell {
	  packages = with pkgs; [
	    rustc-wasm32
	    cargo
	    llvmPackages.bintools
	    nodejs_22
	    nodePackages.pnpm
	    wasm-bindgen-cli
	  ];

	  shellHook = ''
	    export CARGO_TARGET_WASM32_UNKNOWN_UNKNOWN_LINKER="lld"
	  '';
        };
      }
    );
}
