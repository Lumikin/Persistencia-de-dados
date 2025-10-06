# Usando Arch Linux como base
FROM archlinux:latest

# Evita prompts interativos
ENV TERM=xterm-256color \
    LANG=C.UTF-8 \
    LC_ALL=C.UTF-8

# Atualiza e instala pacotes básicos
RUN pacman -Syu --noconfirm && \
    pacman -S --noconfirm base-devel git sudo vim curl && \
    pacman -Scc --noconfirm

# Cria usuário não-root (melhor para dev)
RUN useradd -ms /bin/bash dev && echo "dev ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

USER dev
WORKDIR /home/dev
