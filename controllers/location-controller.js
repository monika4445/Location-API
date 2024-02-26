const { Location } = require("../models");
const { validationResult } = require("express-validator");

class LocationController {
  static async createLocation(req, res) {
    const { name, description, category, rating, review_count, latitude, longitude } = req.body;
  
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg });
      }
  
      // Create the location document
      const newLocation = await Location.create({
        name,
        description,
        category,
        rating,
        review_count,
        latitude,
        longitude,
      });
  
      // Send response with the location_id of the created document
      res.status(201).json({ location_id: newLocation.id });
    } catch (error) {
      console.error("Error creating location:", error);
      res.status(500).json({ message: "Failed to create location" });
    }
  }

  static async getAllLocations(req, res) {
    const { category } = req.query;
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.page_size) || 10;
    const offset = (page - 1) * pageSize;
    try {
        let locations;
        if (category) {
            locations = await Location.findAndCountAll({
                where: { category },
                offset,
                limit: pageSize,
            });
        } else {
            locations = await Location.findAndCountAll({
                offset,
                limit: pageSize,
            });
        }
        res.status(200).json(locations);
    } catch (error) {
        console.error("Error retrieving locations:", error);
        res.status(500).json({ message: "Failed to retrieve locations" });
    }
}

  
  static async getLocation(req, res) {
    const { id } = req.params;
    console.log(id)
    try {
      const location = await Location.findByPk(id);
      if (!location) {
        return res.status(404).json({ message: "Location not found" });
      }
      res.status(200).json(location);
    } catch (error) {
      console.error("Error retrieving location:", error);
      res.status(500).json({ message: "Failed to retrieve location" });
    }
}

static async updateLocation(req, res) {
    const { id } = req.params;
    const updates = req.body;
    try {
        const location = await Location.findByPk(id);
        if (!location) {
            return res.status(404).json({ message: "Location not found" , location});
        }
        await location.update(updates);
        res.status(200).json({ message: "Location updated successfully" });
    } catch (error) {
        console.error("Error updating location:", error);
        res.status(500).json({ message: "Failed to update location" });
    }
}

static async updateLocationsByCategory(req, res) {
    const { category } = req.query;
    const updates = req.body;
    try {
        const locations = await Location.update(updates, {
            where: { category }
        });
        res.status(200).json({ message: "Locations updated successfully", affectedCount: locations[0] });
    } catch (error) {
        console.error("Error updating locations by category:", error);
        res.status(500).json({ message: "Failed to update locations" });
    }
}

static async deleteLocation(req, res) {
    const { id } = req.params;
    try {
        const location = await Location.findByPk(id);
        if (!location) {
            return res.status(404).json({ message: "Location not found" });
        }
        await location.destroy();
        res.status(200).json({ message: "Location deleted successfully" });
    } catch (error) {
        console.error("Error deleting location:", error);
        res.status(500).json({ message: "Failed to delete location" });
    }
}

}

module.exports = LocationController;