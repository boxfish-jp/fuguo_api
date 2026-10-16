{
  description = "fuguo_api";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        fhs = pkgs.buildFHSEnv {
          name = "dev";
          targetPkgs = _: [
            pkgs.nodejs_24
            pkgs.pnpm_11
            pkgs.turbo
            pkgs.typescript-language-server
            pkgs.nixd
            pkgs.nixfmt
            pkgs.python3
          ];
          runScript = "bash";
        };
      in
      {
        formatter = pkgs.nixfmt-tree;
        devShells.default = pkgs.mkShell {
          packages = [ fhs ];
          shellHook = ''
            if [[ -z $DIRENV_IN_ENVRC ]]; then
              exec ${fhs}/bin/dev
            fi
          '';
        };
      }
    );
}
