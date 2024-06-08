{
  description = "boredvico.dev dev - nodejs, rust, wasm-pack support";

  inputs = {
    fenix = {
      url = "github:nix-community/fenix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    fenix,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {inherit system;};
        rust-toolchain = with fenix.packages.${system}; [
          minimal.cargo
          minimal.rustc
          targets.wasm32-unknown-unknown.latest.rust-std
        ];
      in rec {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            llvmPackages.bintools
            nodejs_22
            nodePackages.pnpm
            wasm-bindgen-cli
            # ommited for now, as zed doesn't support using rust in a shell environment
            # such as direnv (might be patched later)
            # rust-toolchain
          ];

          shellHook = ''
            export CARGO_TARGET_WASM32_UNKNOWN_UNKNOWN_LINKER="lld"
          '';
        };
      }
    );
}
