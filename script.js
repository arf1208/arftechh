body { font-family: 'Space Grotesk', sans-serif; }

.input-field {
    width: 100%;
    padding: 1rem;
    background: transparent;
    border: 1px solid rgba(128, 128, 128, 0.3);
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s;
}

.input-field:focus {
    border-color: #2563eb;
}

.service-box {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.service-box.visible {
    opacity: 1;
    transform: translateY(0);
}

.radial-gradient {
    background: radial-gradient(circle at center, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
}

@keyframes up {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-up { animation: up 1s forwards; }
