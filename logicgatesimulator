def AND(a, b):
    return a & b

def OR(a, b):
    return a | b

def XOR(a, b):
    return a ^ b

def NOT(a):
    return 1 - a  # inverte o bit (1 → 0, 0 → 1)

def main():
    print("=== Simulador de Portas Lógicas ===")
    print("Escolha a operação: AND, OR, XOR, NOT")

    op = input("Operação: ").upper()

    if op == "NOT":
        a = int(input("Digite o valor de A (0 ou 1): "))
        print(f"Saída: {NOT(a)}")

    elif op in ["AND", "OR", "XOR"]:
        a = int(input("Digite o valor de A (0 ou 1): "))
        b = int(input("Digite o valor de B (0 ou 1): "))

        if op == "AND":
            print(f"Saída: {AND(a, b)}")
        elif op == "OR":
            print(f"Saída: {OR(a, b)}")
        elif op == "XOR":
            print(f"Saída: {XOR(a, b)}")

    else:
        print("Operação inválida.")

if __name__ == "__main__":
    main()
