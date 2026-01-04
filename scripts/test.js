function bundle(block, name, description) {
  if (!block) return;

  block.name = name;
  block.description = description;
}

// Bundles
bundle(Blocks.infestationSkyRipper, "bob, "")
