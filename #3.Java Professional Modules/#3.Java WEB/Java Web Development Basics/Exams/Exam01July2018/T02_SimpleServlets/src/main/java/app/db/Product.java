package app.db;

public class Product {

    private String name;
    private String description;
    private String type;

    public Product(String name, String description, String type) {
        this.name = name;
        this.description = description;
        this.type = type;
    }

    public Product() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
